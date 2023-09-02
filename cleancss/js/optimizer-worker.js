var initialized = false

onmessage = function(event) {
  switch (event.data.command) {
    case 'initialize':
      if (!initialized) {
        initialized = true
        importScripts('v4.2.2.js')
      }
      break
    case 'optimize':
      new CleanCSS(event.data.options).minify(event.data.input, function (error, output) {
        postMessage({
          command: 'optimized',
          id: event.data.id,
          error: error,
          output: output,
          saved: event.data.input.length - output.styles.length
        })
      })
  }
}


