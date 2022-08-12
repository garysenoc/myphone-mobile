//
//  RCTPixelTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "PixelViewController.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTPixelTester : NSObject <RCTBridgeModule>
@property (nonatomic) PixelViewController *pixelViewController;
@end

NS_ASSUME_NONNULL_END
