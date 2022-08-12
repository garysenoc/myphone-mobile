//
//  RCTMicTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTMicTester.h"

@implementation RCTMicTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _micTester = [[MicTester alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
