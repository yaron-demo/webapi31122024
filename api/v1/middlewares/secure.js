module.exports=(req,res,next)=>{// יצרנו שכבה שמדפיסה את כתובות ה אייפי של הבקשה ומעבירה את הבקשה הלאה
    let arrIps=["192.168.15","::1","8.6.5.9","23.54.23.1"];// מאגר כתובות אייפי מורשות
    for(let i=0;i<arrIps.length;i++)// מעבר על כל כתובות ה אייפי שבמערך כתובות מורשות
    {
        if(req.ip==arrIps[i])// במידה והכתובת נמצאה, מעבר לשכבה הבאה
        {
           return next(); 
        }
    }
   return res.status(401).json({Msg:"Not Authorized"});// במידה ולא נמצא החזרת תשובה שאינך מורשה לגשת
   
};