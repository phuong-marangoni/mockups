const cakePicsCount = 5
const cakeImgInfo = [
  "Photo by Annie Spratt on Unsplash",
  "Photo by Taylor Kiser on Unsplash",
  "Photo by David Holifield on Unsplash",
  "Photo by Olga Kudriavtseva on Unsplash",
  "Photo by Toa Heftiba on Unsplash"
]
const imagesTemplate = document.querySelector('[data-cake-images-template]')
const imagesContainer = document.querySelector('[data-cake-images]')

function displayImages() {
  for (let i = 2; i <= cakePicsCount; i++) {
    const imgContainer = imagesTemplate.content.cloneNode(true)

    imgContainer.querySelector('[data-cake-img]').src = `./images/cake${i}.jpg`
    imgContainer.querySelector('[data-cake-img]').title = cakeImgInfo[i-1]
    imgContainer.querySelector('[data-cake-info]').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    // Add to the container for rendering
    imagesContainer.append(imgContainer)
  }
}

displayImages()
