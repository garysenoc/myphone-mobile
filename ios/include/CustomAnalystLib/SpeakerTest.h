//
//  SpeakerTest.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 16/02/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AudioToolbox/AudioToolbox.h>
#import <AudioUnit/AudioUnit.h>
#import <AVFoundation/AVFoundation.h>

@protocol SpeakerSoundDelegate
@required
- (void)speakerTestCompleted;
@end

@interface SpeakerTest : NSObject <AVAudioPlayerDelegate>

typedef enum {
    Hz100,
    Hz200,
    Hz300,
    Music
} SoundType;

typedef enum {
    SPEAKER,
    EARPIECE
} SoundOutput;

@property AVAudioPlayer *player;

- (void) startSound: (SoundType)soundType fromOutput:(SoundOutput)output;
- (void) startSoundFromFile: (NSString*)soundFile fromOutput:(SoundOutput)output;
- (void) stopSound;

@property (readwrite, retain) NSObject<SpeakerSoundDelegate> *delegate;

@end
