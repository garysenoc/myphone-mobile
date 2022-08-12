//
//  HardwareKeysDetector.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 18/02/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MuteKeyDetector.h"

@protocol HardwareKeysDelegate <NSObject>
- (void) homeKeyDetected;
- (void) powerKeyDetected;
- (void) volumeUpKeyDetected;
- (void) volumeDownKeyDetected;
- (void) muteKeyDetected;
@end

@interface HardwareKeysDetector : NSObject <MuteSwitchDelegate>
{
    
}

@property id <HardwareKeysDelegate> delegate;

@property AVAudioSession *audioSession;
@property NSTimer *myMuteCheckTimer;

- (void) listenForVolumeKeys: (id)object;

- (void) stopListenForVolumeKeys: (id)object;

- (void) observeValueForKeyPath;

- (void) applicationWillResign;

- (void) listenForMuteKey;

- (void) stopListeningForMuteKey;

- (bool) isHomeKeySupported;

@end
