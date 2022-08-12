//
//  SensorTest.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 02/07/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreMotion/CoreMotion.h>

NS_ASSUME_NONNULL_BEGIN

@protocol SensorTestDelegate <NSObject>
@optional
- (void) gyroscopeTestPassed;
- (void) gyroscopeTestFailed;

- (void) accelerometerTestFailed;
- (void) accelerometerTestPassed;
- (void) tiltForwardPassed;
- (void) tiltBackPassed;
- (void) tiltLeftPassed;
- (void) tiltRightPassed;

@end

@interface SensorTest : NSObject {
    CMMotionManager *motionManager;
    float rotation;
}

- (void) startGyrosopeSensorTest;
- (void) startAccelerometerSensorTest;

- (void) stopGyrosopeSensorTest;
- (void) stopAccelerometerSensorTest;

@property id <SensorTestDelegate> delegate;

@end

NS_ASSUME_NONNULL_END
