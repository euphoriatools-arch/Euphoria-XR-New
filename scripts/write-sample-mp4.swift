import AVFoundation
import CoreMedia
import CoreVideo
import Foundation

let path = CommandLine.arguments[1]
let url = URL(fileURLWithPath: path)
try? FileManager.default.removeItem(at: url)
let writer = try AVAssetWriter(outputURL: url, fileType: .mp4)
let settings: [String: Any] = [
	AVVideoCodecKey: AVVideoCodecType.h264,
	AVVideoWidthKey: 320,
	AVVideoHeightKey: 160,
]
let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: input, sourcePixelBufferAttributes: [
	kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
	kCVPixelBufferWidthKey as String: 320,
	kCVPixelBufferHeightKey as String: 160,
])
writer.add(input)
writer.startWriting()
writer.startSession(atSourceTime: .zero)
var pixel: CVPixelBuffer?
CVPixelBufferCreate(kCFAllocatorDefault, 320, 160, kCVPixelFormatType_32BGRA, nil, &pixel)
guard let frame = pixel else { throw NSError(domain: "mp4", code: 1) }
CVPixelBufferLockBaseAddress(frame, [])
if let base = CVPixelBufferGetBaseAddress(frame) {
	memset(base, 16, CVPixelBufferGetDataSize(frame))
}
CVPixelBufferUnlockBaseAddress(frame, [])
let deadline = Date().addingTimeInterval(2)
while !input.isReadyForMoreMediaData && Date() < deadline {
	Thread.sleep(forTimeInterval: 0.01)
}
if !adaptor.append(frame, withPresentationTime: .zero) {
	fputs("append failed: \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
	exit(1)
}
input.markAsFinished()
let group = DispatchGroup()
group.enter()
writer.finishWriting { group.leave() }
group.wait()
if writer.status != .completed {
	fputs("write failed: \(writer.error?.localizedDescription ?? "unknown")\n", stderr)
	exit(1)
}
