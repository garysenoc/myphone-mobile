//
//  RCTKeysTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTKeysTester.h"

@implementation RCTKeysTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _hardwareKeysDetector = [[HardwareKeysDetector alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
