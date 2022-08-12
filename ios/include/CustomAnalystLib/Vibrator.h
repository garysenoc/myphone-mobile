//
//  Vibrator.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 13/02/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Vibrator : NSObject

@property NSTimer *TestTimer;

- (BOOL) isVibrationSupported;

- (void) vibrateDevice;

- (void) stopVibrate;

@end
