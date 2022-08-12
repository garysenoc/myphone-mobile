//
//  FlashLightTester.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 25/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface FlashLightTester : NSObject

typedef enum {
    ON,
    OFF
} FLASHLIGHT_STATE;

- (void) turnFlashLightON;
- (void) turnFlashLightOFF;

- (BOOL) isFlashLightSupported;

- (FLASHLIGHT_STATE) getFlashLightState;

@end
