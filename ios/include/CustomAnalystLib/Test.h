//
//  Test.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 12/06/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Test : NSObject {
}

typedef enum {
     DISPLAY_TEST,
     PIXEL_TEST,
     SCREEN_TEST,
     SPEAKER_TEST,
     KEY_TEST,
     MUTE_KEY_TEST,
     VOLUME_UP_BUTTON_TEST,
     VOLUME_DOWN_BUTTON_TEST,
     HOME_BUTTON_TEST,
     POWER_BUTTON_TEST,
     OTHER_KEY,
     CONNETIVITY_TEST,
     SIM_TEST,
     GPS_TEST,
     WIFI_TEST,
     CAMERA__TEST,
     FLASH_TEST,
     CAMERA_FRONT_TEST,
     CAMERA_REAR_TEST,
     VIBRATION_TEST,
     MIC_TEST,
     SENSOR_TEST,
     PROXIMITY_TEST,
     GYROSCOPE_TEST,
     ACCELEROMETER_TEST,
     COSMETIC_TEST,
     COSMETIC_SCREEN_TEST,
     DEVICE_WORKING_TEST,
     DEVICE_GRADE_TEST,
     DISPLAY_BROKEN_TEST,
     DISPLAY_SCRATCHED_TEST,
     HOUSING_DAMAGED_TEST,
     FACE_ID,
     TOUCH_ID,
    HEADSET_TEST,
    CALL_TEST,
    CUSTOM_COSMETIC_TEST,
    CHARGING_TEST
    
} TestType;

@property NSString *testName;
@property NSString *parentName;
@property NSString *vcName;
@property NSString *testGrade;
@property NSString *testResult;

- (instancetype)initTestWithName:(NSString *)testName
                  withParentName:(NSString *)parentName;

- (instancetype)initTestWithName:(NSString *)testName
withVCName:(NSString *)vcName;

+ (NSString *)getParentTestNameForTest:(TestType)test;
+ (NSString *)getVCTestNameForTest:(TestType)test;

@end

NS_ASSUME_NONNULL_END
