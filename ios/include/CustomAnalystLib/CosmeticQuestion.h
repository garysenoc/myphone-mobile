//
//  CosmeticQuestion.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 27/12/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CosmeticOption.h"

NS_ASSUME_NONNULL_BEGIN

@interface CosmeticQuestion : NSObject

@property NSString *strQuestion;
@property NSMutableArray *options;
@property CosmeticOption *selectedOption;
@property NSString *selectedOptionGrade;

- (void) addOption: (CosmeticOption *)option;

@end

NS_ASSUME_NONNULL_END
