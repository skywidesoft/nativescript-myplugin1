let frame = require('ui/frame');

export class Myplugin1 {

    public show() {

        let activity = frame.topmost().android.activity;

        let intent = new android.content.Intent(activity, com.example.clarence.mylibrarytest1.TestActivity.class);

        activity.startActivity(intent);

    }

}
