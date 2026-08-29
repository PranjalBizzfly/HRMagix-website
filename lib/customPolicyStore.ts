"use client";

/**
 * Storage for policies added through "Add Custom Policy".
 *
 * WHERE THE FILE ACTUALLY GOES, STATED PLAINLY.
 *
 * This website is statically generated and has no backend, so an uploaded PDF
 * cannot be posted to a server. Rather than fake a submission, the file is
 * stored as a real Blob in IndexedDB in the visitor's own browser.
 *
 * That makes the feature genuinely functional rather than decorative: the
 * policy appears in the list, View opens the actual PDF, Download saves the
 * actual file, and both survive a reload and a browser restart. What it does
 * not do — and what the interface says clearly — is publish the policy to
 * anyone else. Issuing a policy to employees and tracking acknowledgement per
 * version happens inside the HRMagix Documents module.
 *
 * IndexedDB rather than localStorage because localStorage holds strings, and
 * base64-encoding a multi-megabyte PDF into a 5MB quota fails on the first real
 * document.
 */

const DB_NAME = "hrmagix-policies";
const DB_VERSION = 1;
const STORE = "custom";

export type CustomPolicy = {
  /** Stable id, also the IndexedDB key. */
  id: string;
  name: string;
  description: string;
  fileName: string;
  fileSize: number;
  /** ISO timestamp of when it was added in this browser. */
  addedAt: string;
  /** The PDF itself. */
  blob: Blob;
};

/** Metadata only — what the list needs, without holding blobs in React state. */
export type CustomPolicyMeta = Omit<CustomPolicy, "blob">;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("This browser does not provide IndexedDB."));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("Could not open local storage."));
  });
}

function tx<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE, mode);
        const req = run(t.objectStore(STORE));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error ?? new Error("Storage request failed."));
        t.oncomplete = () => db.close();
      }),
  );
}

export async function listCustomPolicies(): Promise<CustomPolicyMeta[]> {
  const all = await tx<CustomPolicy[]>("readonly", (s) => s.getAll() as IDBRequest<CustomPolicy[]>);
  return all
    .map(({ blob: _blob, ...meta }) => meta)
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt));
}

export async function addCustomPolicy(input: {
  name: string;
  description: string;
  file: File;
}): Promise<CustomPolicyMeta> {
  const record: CustomPolicy = {
    id: `cp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: input.name.trim(),
    description: input.description.trim(),
    fileName: input.file.name,
    fileSize: input.file.size,
    addedAt: new Date().toISOString(),
    blob: input.file,
  };
  await tx("readwrite", (s) => s.put(record));
  const { blob: _blob, ...meta } = record;
  return meta;
}

export async function removeCustomPolicy(id: string): Promise<void> {
  await tx("readwrite", (s) => s.delete(id));
}

/**
 * Returns an object URL for a stored PDF. Callers must revoke it when done —
 * a leaked blob URL pins the whole file in memory for the life of the tab.
 */
export async function getCustomPolicyUrl(id: string): Promise<string> {
  const record = await tx<CustomPolicy | undefined>(
    "readonly",
    (s) => s.get(id) as IDBRequest<CustomPolicy | undefined>,
  );
  if (!record) throw new Error("That policy is no longer stored in this browser.");
  // A generic blob would download rather than preview, so the type is asserted.
  return URL.createObjectURL(new Blob([record.blob], { type: "application/pdf" }));
}
