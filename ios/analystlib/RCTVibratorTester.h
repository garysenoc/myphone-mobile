//
//  RCTVibratorTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "Vibrator.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTVibratorTester : NSObject <RCTBridgeModule>
@property (nonatomic) Vibrator *vibrator;
@end

NS_ASSUME_NONNULL_END
