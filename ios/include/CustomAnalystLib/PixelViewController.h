//
//  PixelViewController.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 07/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol PixelTestResultDelegate <NSObject>
- (void) pixelTestFinished;
@end

@interface PixelViewController : UIViewController

@property id <PixelTestResultDelegate> delegate;

@property BOOL animateViewOnCompletion;

@property (nonatomic) float interval;

@property BOOL isTouchModeON;

@end
