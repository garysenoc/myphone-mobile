//
//  RCTFlashLightTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTFlashLightTester.h"

@implementation RCTFlashLightTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _flashLightTester = [[FlashLightTester alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(isFlashLightSupported)
{
  [_flashLightTester isFlashLightSupported];
}

RCT_EXPORT_METHOD(turnFlashLightON)
{
  [_flashLightTester turnFlashLightON];
}

RCT_EXPORT_METHOD(turnFlashLightOFF)
{
  [_flashLightTester turnFlashLightOFF];
}

RCT_EXPORT_METHOD(getFlashLightState)
{
  [_flashLightTester getFlashLightState];
}

@end
