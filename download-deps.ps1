# Create URLs array
$urls = @(
    # CSS Files
    @{
        url = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.rtl.min.css"
        path = "assets/css/libs/bootstrap.rtl.min.css"
    },
    @{
        url = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        path = "assets/css/libs/aos.min.css"
    },
    @{
        url = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        path = "assets/css/libs/fontawesome.min.css"
    },
    @{
        url = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css"
        path = "assets/css/libs/swiper-bundle.min.css"
    },
    # JavaScript Files
    @{
        url = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
        path = "assets/js/libs/bootstrap.bundle.min.js"
    },
    @{
        url = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        path = "assets/js/libs/aos.min.js"
    },
    @{
        url = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"
        path = "assets/js/libs/swiper-bundle.min.js"
    }
)

# Download each file
foreach ($item in $urls) {
    Write-Host "Downloading $($item.url)..."
    Invoke-WebRequest -Uri $item.url -OutFile $item.path
}

Write-Host "All files downloaded successfully!"
