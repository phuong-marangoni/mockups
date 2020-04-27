const cakePicsCount = 5
merchPicsCount = 4
const cakeImgInfo = [
  "Photo by Annie Spratt on Unsplash",
  "Photo by Taylor Kiser on Unsplash",
  "Photo by David Holifield on Unsplash",
  "Photo by Olga Kudriavtseva on Unsplash",
  "Photo by Toa Heftiba on Unsplash"
]

const merchImgInfo = [
  "Photo by Grysell Alvarez on Unsplash",
  "Photo by Michael Soledad on Unsplash",
  "Photo by Keila Hötzel on Unsplash",
  "Photo by Dee @ Copper and Wild on Unsplash"
]

const imagesTemplate = document.querySelector('[data-cake-images-template]')
const imagesContainer = document.querySelector('[data-cake-images]')
const merchTemplate = document.querySelector('[data-merch-images-template]')
const merchContainer = document.querySelector('[data-merch-images]')

function displayCakeImages() {
  for (let i = 2; i <= cakePicsCount; i++) {
    const imgContainer = imagesTemplate.content.cloneNode(true)

    imgContainer.querySelector('[data-cake-img]').src = `./images/cake${i}.jpg`
    imgContainer.querySelector('[data-cake-img]').title = cakeImgInfo[i-1]
    imgContainer.querySelector('[data-cake-info]').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    // Add to the container for rendering
    imagesContainer.append(imgContainer)
  }
}

function displayMerchImages() {
  for (let i = 1; i <= merchPicsCount; i++) {
    const merContainer = merchTemplate.content.cloneNode(true)

    merContainer.querySelector('[data-merch-img]').src = `./images/merch${i}.jpg`
    merContainer.querySelector('[data-merch-img]').title = merchImgInfo[i-1]
    merContainer.querySelector('[data-merch-info]').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    // Add to the container for rendering
    merchContainer.append(merContainer)
  }
}

displayCakeImages()
displayMerchImages()
