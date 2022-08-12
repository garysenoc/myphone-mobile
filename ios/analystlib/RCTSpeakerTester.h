//
//  RCTSpeakerTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 7/19/22.
//

#import <React/RCTBridgeModule.h>
#import "SpeakerTest.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTSpeakerTester : NSObject <RCTBridgeModule>
@property (nonatomic) SpeakerTest *speakerTest;
@end

NS_ASSUME_NONNULL_END
