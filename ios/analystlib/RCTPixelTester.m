//
//  RCTPixelTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTPixelTester.h"

@implementation RCTPixelTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _pixelViewController = [[PixelViewController alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
