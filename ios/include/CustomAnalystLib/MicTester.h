//
//  MicTester.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 20/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <AVFoundation/AVFoundation.h>
#import <CoreAudio/CoreAudioTypes.h>

@protocol MicTestDelegate
@optional
- (void)frontMicDetected;
- (void)backMicDetected;
- (void)bottomMicDetected;
- (void)topMicDetected;

- (void)frontMicRecorded:(NSString *)path;
- (void)backMicRecorded:(NSString *)path;
- (void)bottomMicRecorded:(NSString *)path;
- (void)topMicRecorded:(NSString *)path;
@end

@interface MicTester : NSObject
{
    NSTimer *levelTimer;
    double lowPassResults;
}

typedef enum {
    Front,
    Back,
    Bottom,
    Top
} MIC_TYPE;

- (void) listenForMic: (MIC_TYPE) forMicType;
- (void) stopListeningForMic: (MIC_TYPE) forMicType;
- (void) recordWithMic: (MIC_TYPE) forMicType;
- (void) playRecordedAudio;
- (void) stopRecordedAudio;

- (BOOL) isFrontMicSupported;
- (BOOL) isBackMicSupported;
- (BOOL) isBottomMicSupported;
- (BOOL) isTopMicSupported;

@property (readwrite, retain) NSObject<MicTestDelegate> *delegate;

@property (strong, nonatomic) AVAudioRecorder *audioRecorder;
@property (strong, nonatomic) AVAudioPlayer *audioPlayer;

-(void) removeRecording:(NSString *)fromPath;

@end
