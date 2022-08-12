//
//  RCTWifiTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTWifiTester.h"

@implementation RCTWifiTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _wifiTester = [[WifiTester alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
