//
//  RCTMicTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "MicTester.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTMicTester : NSObject <RCTBridgeModule>
@property (nonatomic) MicTester *micTester;
@end

NS_ASSUME_NONNULL_END
