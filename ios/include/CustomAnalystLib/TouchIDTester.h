//
//  TouchIDTester.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 08/07/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol TouchIDTestDelegate <NSObject>
@optional
- (void) touchIDTestPassed;
- (void) touchIDTestFailed;
- (void) touchIDNotConfigured;

@end

@interface TouchIDTester : NSObject

- (void) startTouchIDTest;

@property id <TouchIDTestDelegate> delegate;

@end

NS_ASSUME_NONNULL_END
