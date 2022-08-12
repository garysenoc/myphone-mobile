//
//  RCTFlashLightTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "FlashLightTester.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTFlashLightTester : NSObject <RCTBridgeModule>
@property (nonatomic) FlashLightTester *flashLightTester;
@end

NS_ASSUME_NONNULL_END
