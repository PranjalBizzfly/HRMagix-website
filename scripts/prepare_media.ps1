Add-Type -AssemblyName System.Drawing

function Crop-Image($srcPath, $destPath, $x, $y, $w, $h, $outSize = 400) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $rect = New-Object System.Drawing.Rectangle([int]$x, [int]$y, [int]$w, [int]$h)
    $bmp = New-Object System.Drawing.Bitmap([int]$outSize, [int]$outSize)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $outSize, $outSize)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Created $destPath"
}

# Inspect width & height of solution images
$src1 = [System.Drawing.Image]::FromFile("c:\project\HRMagix-website\public\media\solution-payroll.jpg")
Write-Host "solution-payroll: $($src1.Width)x$($src1.Height)"
$src1.Dispose()

$src2 = [System.Drawing.Image]::FromFile("c:\project\HRMagix-website\public\media\solution-growth.jpg")
Write-Host "solution-growth: $($src2.Width)x$($src2.Height)"
$src2.Dispose()

$src3 = [System.Drawing.Image]::FromFile("c:\project\HRMagix-website\public\media\solution-timework.jpg")
Write-Host "solution-timework: $($src3.Width)x$($src3.Height)"
$src3.Dispose()

# Priya Sharma avatar from solution-payroll.jpg (the female finance/HR professional on the right)
Crop-Image "c:\project\HRMagix-website\public\media\solution-payroll.jpg" "c:\project\HRMagix-website\public\media\testimonial-priya.png" 900 240 460 460 400

# Rahul Kulkarni avatar from solution-growth.jpg (the professional male sitting on right)
Crop-Image "c:\project\HRMagix-website\public\media\solution-growth.jpg" "c:\project\HRMagix-website\public\media\testimonial-rahul.png" 1220 220 440 440 400

# Amit Mehta avatar from solution-timework.jpg (the smiling male team lead in center)
Crop-Image "c:\project\HRMagix-website\public\media\solution-timework.jpg" "c:\project\HRMagix-website\public\media\testimonial-amit.png" 580 260 440 440 400

# Additional avatars for social proof / avatar stacks
Crop-Image "c:\project\HRMagix-website\public\media\solution-timework.jpg" "c:\project\HRMagix-website\public\media\avatar-1.png" 240 280 400 400 200
Crop-Image "c:\project\HRMagix-website\public\media\solution-growth.jpg" "c:\project\HRMagix-website\public\media\avatar-2.png" 320 200 440 440 200
Crop-Image "c:\project\HRMagix-website\public\media\solution-timework.jpg" "c:\project\HRMagix-website\public\media\avatar-3.png" 1220 300 420 420 200
Crop-Image "c:\project\HRMagix-website\public\media\solution-engagement.jpg" "c:\project\HRMagix-website\public\media\avatar-4.png" 1300 350 420 420 200

# CTA Workspace mockup
Copy-Item "c:\project\HRMagix-website\public\media\hero-workspace.png" "c:\project\HRMagix-website\public\media\cta-workspace-mockup.png"
