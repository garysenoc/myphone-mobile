//
//  HeadsetTester.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 05/12/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import <CoreAudio/CoreAudioTypes.h>

NS_ASSUME_NONNULL_BEGIN

@protocol HeadsetTestDelegate <NSObject>
@optional
- (void) headsetDetected;
- (void) headsetRemoved;
- (void) soundRecorded;
- (void) soundRecordingFailed;

@end

@interface HeadsetTester : NSObject <AVAudioRecorderDelegate>
{
    int recordEncoding;
    enum
    {
        ENC_AAC = 1,
        ENC_ALAC = 2,
        ENC_IMA4 = 3,
        ENC_ILBC = 4,
        ENC_ULAW = 5,
        ENC_PCM = 6,
    } encodingTypes;
}

@property AVAudioPlayer *audioPlayer;
@property AVAudioRecorder *audioRecorder;

- (void) startHeadsetTest;
- (void) recordSound;
- (void) playSound;
- (void) stopSound;

@property id <HeadsetTestDelegate> delegate;

@end

NS_ASSUME_NONNULL_END
