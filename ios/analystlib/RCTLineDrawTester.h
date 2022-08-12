//
//  RCTLineDrawTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "LineDrawViewController.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTLineDrawTester : NSObject <RCTBridgeModule>
@property (nonatomic) LineDrawViewController *lineDrawViewController;
@end

NS_ASSUME_NONNULL_END
