//
//  CameraTestViewController.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 12/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "PotraitCameraControllerViewController.h"

@protocol CameraTestMediaDelegate <NSObject>
@optional
- (void) videoCaptured: (NSURL *)urls;
- (void) imageCaptured: (UIImage *)image filePath:(NSString *)filePath;
- (void) captureCancelled;
@end

@interface CameraTestViewController : UIViewController <UIImagePickerControllerDelegate, UINavigationControllerDelegate, UIAlertViewDelegate>

typedef enum {
    FRONT,
    BACK
} CAM_FACING;

typedef enum {
    POTRAIT_ONLY,
    LANDSCAPE_ONLY,
    BOTH
} ORIENTATION;

typedef enum {
    PICTURE,
    VIDEO
} TEST_TYPE;

@property CAM_FACING facing;
@property TEST_TYPE cam_type;
@property ORIENTATION test_orientation;
@property BOOL animateViewOnCompletion;
@property PotraitCameraControllerViewController *picker;

@property id <CameraTestMediaDelegate> delegate;

@end
