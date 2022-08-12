//
//  TestResults.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 28/06/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface TestResults : NSObject

typedef enum {
    NOT_TESTED,
    PASS,
    FAIL,
    NOT_SUPPORTED
} RESULT;

@property RESULT pixel_test;
@property RESULT screen_test;
@property RESULT vibrate_test;
@property RESULT vol_up_test;
@property RESULT vol_down_test;
@property RESULT power_test;
@property RESULT home_test;
@property RESULT mute_key;
@property RESULT camera_back_test;
@property RESULT camera_front_test;
@property RESULT camera_back_present;
@property RESULT camera_front_present;
@property RESULT speaker_test;
@property RESULT earpiece_test;
@property RESULT mic_test;
@property RESULT gps_test;
@property RESULT bluetooth;
@property RESULT wifi;
@property RESULT proximity_test;
@property RESULT flash_test;
@property RESULT headset_test;
@property RESULT call_test;
@property RESULT charging_test;

+ (TestResults *) sharedInstance;
+ (NSString *) testResultInString: (RESULT) forResult;

@end
