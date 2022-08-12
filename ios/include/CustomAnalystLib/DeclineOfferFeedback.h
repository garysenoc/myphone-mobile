//
//  DeclineOfferFeedback.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 13/07/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface DeclineOfferFeedback : NSObject

@property NSString *priceLow;
@property NSString *foundBetterPrice;
@property NSString *comments;
@property NSDictionary *selectedReasons;

+ (id)sharedFeedback;

@end

NS_ASSUME_NONNULL_END

