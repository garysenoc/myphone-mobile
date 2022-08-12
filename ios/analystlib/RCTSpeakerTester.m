//
//  RCTSpeakerTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 7/19/22.
//

#import "RCTSpeakerTester.h"

@implementation RCTSpeakerTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _speakerTest = [[SpeakerTest alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startSoundios)
{
  [_speakerTest startSound:Music fromOutput:SPEAKER];
}

RCT_EXPORT_METHOD(stopSound)
{
  [_speakerTest stopSound];
}

@end
