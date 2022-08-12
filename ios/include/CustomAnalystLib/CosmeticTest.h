//
//  CosmeticTest.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 27/12/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CosmeticQuestion.h"

NS_ASSUME_NONNULL_BEGIN

@interface CosmeticTest : NSObject

@property NSMutableArray *questions;

- (void) addQuestion: (CosmeticQuestion *)question;

@end

NS_ASSUME_NONNULL_END
