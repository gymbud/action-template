import * as core from "@actions/core"

const onError = (error: Error) => core.setFailed(error.message)

const run = async () => {
   console.log("Hello, World!")
}

process.setUncaughtExceptionCaptureCallback(onError)

run().catch(onError)
