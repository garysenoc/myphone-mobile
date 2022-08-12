//
//  LineDrawViewController.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 06/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol LineDrawTestResultDelegate <NSObject>
- (void) lineDrawTestFinished:(BOOL) result;
@end

@interface LineDrawViewController : UIViewController

@property id <LineDrawTestResultDelegate> delegate;

@property UIColor* passColor;
@property UIColor* defaultColor;

@property BOOL animateViewOnCompletion;

@end
