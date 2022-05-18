import { Message } from 'element-ui'
let messageInstance = null

export const rewriteMessage = (options) => {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message(options)
}
;['error', 'success', 'info', 'warning'].forEach((type) => {
  rewriteMessage[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return rewriteMessage(options)
  }
})
