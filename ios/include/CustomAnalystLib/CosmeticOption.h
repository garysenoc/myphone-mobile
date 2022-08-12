//
//  CosmeticOption.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 27/12/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface CosmeticOption : NSObject

@property NSString *strOption;
@property NSString *strGrade;
@property NSString *optionDescription;
@property BOOL isDefault, isPass;

@end

NS_ASSUME_NONNULL_END
