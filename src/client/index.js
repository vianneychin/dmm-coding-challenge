const urlForm = document.getElementById('url-form')
const urlInput = document.getElementById('url-input')
const shortenedLink = document.getElementById('shortened-link')

urlForm.addEventListener('submit', async event => {
  event.preventDefault()
  try {
    const response = await fetch('/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: urlInput.value
      })
    })

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const jsonResponse = await response.json()

    /* Removes the the link and create another link when user clicks button
      so the the new links are not stacking up on each other. */
    while (shortenedLink.hasChildNodes()) {
      shortenedLink.removeChild(shortenedLink.lastChild)
    }

    shortenedLink.insertAdjacentHTML(
      'afterbegin',
      `
      <a style="height: fit-content" target="_blank" rel="noopener" href="/${jsonResponse.short_id}"> 
        ${location.origin}/${jsonResponse.short_id}
      </a>
    `
    )
  } catch (error) {
    console.error(error)
  }
})
