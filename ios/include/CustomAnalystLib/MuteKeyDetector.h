//
//  MuteKeyDetector.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 12/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#include <AudioToolbox/AudioToolbox.h>

@class MuteKeyDetector;

@protocol MuteSwitchDelegate
@required
- (void)isMuted:(BOOL)muted;
@end

@interface MuteKeyDetector : NSObject
{
    float soundDuration;
    NSTimer *playbackTimer;
}

/**
 Your delegate
 */
@property (readwrite, retain) NSObject<MuteSwitchDelegate> *delegate;

/** Creates a shared instance
 */
+ (MuteKeyDetector *)sharedInstance;

/** Determines if the device is muted, wait for delegate callback using isMuted: on your delegate.
 */
- (void)detectMuteSwitch;

@end
