//
//  RCTVibratorTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTVibratorTester.h"

@implementation RCTVibratorTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _vibrator = [[Vibrator alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(isVibrationSupported)
{
  [_vibrator isVibrationSupported];
}

RCT_EXPORT_METHOD(vibrateDevice)
{
  [_vibrator vibrateDevice];
}

@end
