const dorkCategories = {
  'SQL Injection': [
    { query: 'inurl:index.php?id=', desc: 'Generic SQLi vulnerable parameter in URL', descFa: 'پارامتر آسیب‌پذیر SQLi در URL' },
    { query: 'inurl:?id=', desc: 'Simple ID parameter SQLi target', descFa: 'هدف SQLi با پارامتر ساده id' },
    { query: 'intext:"sql syntax near"', desc: 'Pages revealing SQL syntax errors', descFa: 'صفحات دارای خطای نحوی SQL' },
    { query: 'intext:"mysql_fetch"', desc: 'MySQL fetch error disclosures', descFa: 'نمایش خطاهای دریافت MySQL' },
    { query: 'inurl:product.php?id=', desc: 'Product page SQLi parameter', descFa: 'پارامتر SQLi در صفحه محصول' },
    { query: 'inurl:item.php?id=', desc: 'Item page SQLi target', descFa: 'هدف SQLi در صفحه آیتم' },
    { query: 'inurl:article.php?id=', desc: 'Article page with SQLi parameter', descFa: 'صفحه مقاله با پارامتر SQLi' },
    { query: 'inurl:page.php?cat=', desc: 'Category-based SQLi parameter', descFa: 'پارامتر SQLi بر اساس دسته‌بندی' },
    { query: 'inurl:news.php?id=', desc: 'News page SQLi vector', descFa: 'بردار SQLi در صفحه خبر' },
    { query: 'inurl:gallery.php?id=', desc: 'Gallery page SQLi parameter', descFa: 'پارامتر SQLi در صفحه گالری' },
  ],
  'File Upload': [
    { query: 'inurl:upload.php', desc: 'Generic file upload page', descFa: 'صفحه آپلود فایل عمومی' },
    { query: 'inurl:fileupload', desc: 'File upload functionality', descFa: 'عملکرد آپلود فایل' },
    { query: 'inurl:file-upload', desc: 'File upload with hyphen', descFa: 'آپلود فایل با خط فاصله' },
    { query: 'intitle:"index of" uploads', desc: 'Directory listing of uploads folder', descFa: 'لیست پوشه آپلودها' },
    { query: 'inurl:uploadify', desc: 'Uploadify plugin instances', descFa: 'نمونه‌های پلاگین Uploadify' },
    { query: 'inurl:dropzone', desc: 'Dropzone.js upload implementations', descFa: 'پیاده‌سازی‌های Dropzone.js' },
    { query: 'inurl:ckfinder', desc: 'CKFinder file manager upload', descFa: 'مدیریت فایل CKFinder' },
    { query: 'inurl:filemanager', desc: 'Generic file manager upload pages', descFa: 'صفحات مدیریت فایل عمومی' },
    { query: 'inurl:plupload', desc: 'Plupload file uploader instances', descFa: 'نمونه‌های Plupload' },
  ],
  'Directory Listing': [
    { query: 'intitle:"index of /"', desc: 'Generic directory listing enabled', descFa: 'لیست دایرکتوری فعال' },
    { query: 'intitle:"index of" "parent directory"', desc: 'Directory listing with parent directory', descFa: 'لیست دایرکتوری با دایرکتوری والد' },
    { query: 'intitle:"index of" "backup"', desc: 'Directory listing exposing backup folders', descFa: 'لیست دایرکتوری پشتیبان' },
    { query: 'intitle:"index of" "admin"', desc: 'Directory listing of admin folders', descFa: 'لیست دایرکتوری ادمین' },
    { query: 'intitle:"index of" "config"', desc: 'Directory listing exposing config folders', descFa: 'لیست دایرکتوری کانفیگ' },
    { query: 'intitle:"index of" "private"', desc: 'Directory listing of private folders', descFa: 'لیست دایرکتوری خصوصی' },
    { query: 'intitle:"index of" "logs"', desc: 'Directory listing exposing log folders', descFa: 'لیست دایرکتوری لاگ‌ها' },
    { query: 'intitle:"index of" "secret"', desc: 'Directory listing exposing secret files', descFa: 'لیست دایرکتوری فایل‌های مخفی' },
    { query: 'intitle:"index of" "images"', desc: 'Directory listing of image folders', descFa: 'لیست دایرکتوری تصاویر' },
  ],
  'Sensitive Files': [
    { query: 'filetype:sql "INSERT INTO" "password"', desc: 'SQL dumps containing password inserts', descFa: 'خروجی SQL حاوی درج رمز عبور' },
    { query: 'filetype:env DB_PASSWORD', desc: 'Environment files exposing DB credentials', descFa: 'فایل‌های env دارای رمز دیتابیس' },
    { query: 'filetype:pem "BEGIN RSA PRIVATE KEY"', desc: 'RSA private key files exposed', descFa: 'فایل‌های کلید خصوصی RSA' },
    { query: 'filetype:key "PRIVATE KEY"', desc: 'Generic private key files', descFa: 'فایل‌های کلید خصوصی عمومی' },
    { query: 'filetype:pfx "PKCS12"', desc: 'PKCS12 certificate files', descFa: 'فایل‌های گواهی PKCS12' },
    { query: 'filetype:pdf confidential', desc: 'Confidential PDF documents', descFa: 'اسناد PDF محرمانه' },
    { query: 'filetype:doc classified', desc: 'Classified Word documents', descFa: 'اسناد Word طبقه‌بندی شده' },
    { query: 'filetype:xls "SSN"', desc: 'Excel files with Social Security Numbers', descFa: 'فایل‌های Excel با شماره تامین اجتماعی' },
    { query: 'filetype:csv "credit card"', desc: 'CSV files exposing credit card data', descFa: 'فایل‌های CSV با اطلاعات کارت اعتباری' },
    { query: 'filetype:txt "password" "username"', desc: 'Text files containing credentials', descFa: 'فایل‌های متنی حاوی رمز عبور' },
  ],
  'Login Pages': [
    { query: 'intitle:"admin login"', desc: 'Admin login portal pages', descFa: 'صفحات پورتال ورود ادمین' },
    { query: 'intitle:"login" "username" "password"', desc: 'Generic login pages with fields', descFa: 'صفحات ورود عمومی با فیلدها' },
    { query: 'inurl:login.php', desc: 'PHP-based login pages', descFa: 'صفحات ورود مبتنی بر PHP' },
    { query: 'inurl:admin/login', desc: 'Admin login subdirectory', descFa: 'ورود ادمین در زیرشاخه' },
    { query: 'intitle:"sign in" -stackoverflow', desc: 'Sign-in pages excluding StackOverflow', descFa: 'صفحات ورود به سیستم' },
    { query: 'intitle:"member login"', desc: 'Member-only login portals', descFa: 'پورتال‌های ورود اعضا' },
    { query: 'inurl:user/login', desc: 'User login page paths', descFa: 'مسیرهای صفحه ورود کاربر' },
    { query: 'inurl:admin/login.aspx', desc: 'ASP.NET admin login pages', descFa: 'صفحات ورود ادمین ASP.NET' },
    { query: 'inurl:cp/login', desc: 'Control panel login pages', descFa: 'صفحات ورود کنترل پنل' },
  ],
  'Config Files': [
    { query: 'filetype:xml "config"', desc: 'XML configuration files', descFa: 'فایل‌های کانفیگ XML' },
    { query: 'filetype:ini "password"', desc: 'INI files with password settings', descFa: 'فایل‌های INI با تنظیمات رمز عبور' },
    { query: 'filetype:ini DB_PASSWORD', desc: 'INI files with DB password variable', descFa: 'فایل‌های INI با متغیر رمز دیتابیس' },
    { query: 'filetype:cnf "password"', desc: 'CNF configuration files', descFa: 'فایل‌های کانفیگ CNF' },
    { query: 'filetype:conf "password"', desc: 'Conf files with password entries', descFa: 'فایل‌های کانفیگ با رمز عبور' },
    { query: 'filetype:yaml "password"', desc: 'YAML config files with passwords', descFa: 'فایل‌های کانفیگ YAML با رمز عبور' },
    { query: 'filetype:yml "database"', desc: 'YML database configuration files', descFa: 'فایل‌های کانفیگ دیتابیس YML' },
    { query: 'filetype:config "connection"', desc: 'Config files with connection strings', descFa: 'فایل‌های کانفیگ با رشته اتصال' },
    { query: 'filetype:env "APP_KEY"', desc: 'Environment files exposing app keys', descFa: 'فایل‌های env با کلید برنامه' },
  ],
  'Database Files': [
    { query: 'filetype:sql "INSERT INTO" -forum', desc: 'SQL dump files with data inserts', descFa: 'فایل‌های SQL با درج داده' },
    { query: 'filetype:sql "CREATE TABLE"', desc: 'SQL schema definition files', descFa: 'فایل‌های تعریف ساختار SQL' },
    { query: 'filetype:sql "DROP TABLE"', desc: 'SQL files with destructive queries', descFa: 'فایل‌های SQL با کوئری‌های تخریبی' },
    { query: 'filetype:sql "UPDATE users"', desc: 'SQL files updating user tables', descFa: 'فایل‌های SQL به‌روزرسانی کاربران' },
    { query: 'filetype:sql dump', desc: 'Database dump files', descFa: 'فایل‌های dump دیتابیس' },
    { query: 'inurl:backup filetype:sql', desc: 'SQL backup files in backup directory', descFa: 'فایل‌های پشتیبان SQL' },
    { query: 'filetype:sql "wp_users"', desc: 'WordPress user table SQL dumps', descFa: 'خروجی SQL جدول کاربران وردپرس' },
    { query: 'filetype:mdb "password"', desc: 'Access database files', descFa: 'فایل‌های دیتابیس Access' },
    { query: 'filetype:db "password"', desc: 'Generic database files', descFa: 'فایل‌های دیتابیس عمومی' },
    { query: 'inurl:backup filetype:zip "sql"', desc: 'Zipped SQL backup archives', descFa: 'آرشیوهای فشرده SQL پشتیبان' },
  ],
  'Cameras/IoT': [
    { query: 'intitle:"webcam 7"', desc: 'Webcam 7 monitoring interfaces', descFa: 'رابط‌های نظارتی Webcam 7' },
    { query: 'inurl:view/view.shtml', desc: 'Live camera view pages', descFa: 'صفحات نمایش زنده دوربین' },
    { query: 'intitle:"live view" "axis"', desc: 'Axis network camera live view', descFa: 'نمایش زنده دوربین شبکه Axis' },
    { query: 'intitle:"WVC" "wireless"', desc: 'Linksys wireless cameras', descFa: 'دوربین‌های بی‌سیم Linksys' },
    { query: 'intitle:"network camera"', desc: 'Generic network camera interfaces', descFa: 'رابط‌های دوربین شبکه عمومی' },
    { query: 'intitle:"IP CAMERA"', desc: 'IP camera web interfaces', descFa: 'رابط‌های وب دوربین IP' },
    { query: 'inurl:top.html "live view"', desc: 'Live view camera top frames', descFa: 'فریم‌های بالای نمایش زنده دوربین' },
    { query: 'intitle:"snc-rz" inurl:view/', desc: 'Sony SNC network cameras', descFa: 'دوربین‌های شبکه سونی SNC' },
    { query: 'inurl:"CgiStart?page="', desc: 'Camera CGI interface pages', descFa: 'صفحات رابط CGI دوربین' },
    { query: 'intitle:"DVR" "live" "view"', desc: 'DVR live view interfaces', descFa: 'رابط‌های نمایش زنده DVR' },
  ],
  WordPress: [
    { query: 'intitle:"index of" wp-content', desc: 'Directory listing of wp-content', descFa: 'لیست دایرکتوری wp-content' },
    { query: 'inurl:wp-admin', desc: 'WordPress admin panel access', descFa: 'دسترسی به پنل ادمین وردپرس' },
    { query: 'filetype:sql "wp_users"', desc: 'WordPress user table dumps', descFa: 'خروجی جدول کاربران وردپرس' },
    { query: 'inurl:wp-config.bak', desc: 'WordPress config backup file', descFa: 'فایل پشتیبان کانفیگ وردپرس' },
    { query: 'intitle:"index of" wp-config', desc: 'Directory listing exposing wp-config', descFa: 'لیست دایرکتوری wp-config' },
    { query: 'intitle:"index of" wp-uploads', desc: 'WordPress uploads directory listing', descFa: 'لیست دایرکتوری آپلود وردپرس' },
    { query: 'inurl:wp-content/uploads', desc: 'WordPress uploads folder', descFa: 'پوشه آپلود وردپرس' },
    { query: 'filetype:txt "wp-config"', desc: 'Text files with wp-config references', descFa: 'فایل‌های متنی با ارجاع wp-config' },
    { query: 'inurl:wp-json/wp/v2/users', desc: 'WordPress REST API user endpoints', descFa: 'نقاط پایانی REST API وردپرس' },
    { query: 'filetype:xml "wp-config"', desc: 'XML files referencing wp-config', descFa: 'فایل‌های XML حاوی wp-config' },
    { query: 'inurl:/wp-content/debug.log', desc: 'WordPress debug log file', descFa: 'فایل لاگ خطایابی وردپرس' },
    { query: 'intitle:"index of" /wp-includes', desc: 'WordPress includes directory listing', descFa: 'لیست دایرکتوری wp-includes' },
  ],
  Joomla: [
    { query: 'inurl:com_content', desc: 'Joomla content component', descFa: 'کامپوننت محتوای جوملا' },
    { query: 'inurl:option=com_', desc: 'Joomla component parameter', descFa: 'پارامتر کامپوننت جوملا' },
    { query: 'inurl:index.php?option=com', desc: 'Joomla component routing', descFa: 'مسیریابی کامپوننت جوملا' },
    { query: 'inurl:com_users', desc: 'Joomla users component', descFa: 'کامپوننت کاربران جوملا' },
    { query: 'inurl:com_admin', desc: 'Joomla admin component', descFa: 'کامپوننت ادمین جوملا' },
    { query: 'inurl:com_config', desc: 'Joomla config component', descFa: 'کامپوننت کانفیگ جوملا' },
    { query: 'filetype:xml "joomla"', desc: 'XML files exposing Joomla info', descFa: 'فایل‌های XML حاوی اطلاعات جوملا' },
    { query: 'intitle:"index of" /components', desc: 'Joomla components directory listing', descFa: 'لیست دایرکتوری کامپوننت‌های جوملا' },
    { query: 'inurl:component/jfail', desc: 'Joomla jfail component', descFa: 'کامپوننت jfail جوملا' },
    { query: 'inurl:com_phocagallery', desc: 'Joomla Phoca Gallery component', descFa: 'کامپوننت Phoca Gallery جوملا' },
  ],
  'Admin Panels': [
    { query: 'inurl:admin', desc: 'Generic admin panel access', descFa: 'دسترسی به پنل ادمین عمومی' },
    { query: 'intitle:"control panel"', desc: 'Control panel login pages', descFa: 'صفحات ورود کنترل پنل' },
    { query: 'intitle:"administration"', desc: 'Administration panel pages', descFa: 'صفحات پنل مدیریت' },
    { query: 'inurl:administrator', desc: 'Administrator directory access', descFa: 'دسترسی به دایرکتوری مدیر' },
    { query: 'inurl:cpanel', desc: 'cPanel access pages', descFa: 'صفحات دسترسی cPanel' },
    { query: 'inurl:phpmyadmin', desc: 'phpMyAdmin access', descFa: 'دسترسی به phpMyAdmin' },
    { query: 'intitle:"phpMyAdmin"', desc: 'phpMyAdmin login pages', descFa: 'صفحات ورود phpMyAdmin' },
    { query: 'inurl:admin/dashboard', desc: 'Admin dashboard pages', descFa: 'صفحات داشبورد ادمین' },
    { query: 'inurl:admin/panel', desc: 'Admin panel subdirectory', descFa: 'زیرشاخه پنل ادمین' },
    { query: 'inurl:webadmin', desc: 'Web admin interfaces', descFa: 'رابط‌های مدیریت وب' },
  ],
  'Error Messages': [
    { query: 'intitle:"PHP Error"', desc: 'PHP error pages exposed', descFa: 'صفحات خطای PHP' },
    { query: 'intitle:"Warning" "include_once"', desc: 'PHP include path disclosures', descFa: 'افشای مسیر include' },
    { query: 'intitle:"fatal error"', desc: 'Fatal error disclosures', descFa: 'افشای خطاهای بحرانی' },
    { query: 'intitle:"index of" "error_log"', desc: 'Directory listing of error logs', descFa: 'لیست دایرکتوری لاگ‌های خطا' },
    { query: '"Warning: mysql_connect()" "access denied"', desc: 'MySQL connection error messages', descFa: 'پیام‌های خطای اتصال MySQL' },
    { query: 'intext:"cannot modify header information"', desc: 'PHP header modification errors', descFa: 'خطاهای تغییر هدر PHP' },
    { query: '"Stack trace" "PHP"', desc: 'PHP stack trace disclosures', descFa: 'افشای ردیابی پشته PHP' },
    { query: 'intitle:"Server Error" "404"', desc: 'Server 404 error pages', descFa: 'صفحات خطای 404 سرور' },
    { query: '"ORA-" "Oracle" "error"', desc: 'Oracle database error messages', descFa: 'پیام‌های خطای دیتابیس Oracle' },
  ],
  'Log Files': [
    { query: 'filetype:log "password"', desc: 'Log files containing passwords', descFa: 'فایل‌های لاگ حاوی رمز عبور' },
    { query: 'filetype:log "error"', desc: 'Error log files', descFa: 'فایل‌های لاگ خطا' },
    { query: 'filetype:log "admin"', desc: 'Log files with admin references', descFa: 'فایل‌های لاگ با ارجاع ادمین' },
    { query: 'filetype:log "username"', desc: 'Log files exposing usernames', descFa: 'فایل‌های لاگ با نام کاربری' },
    { query: 'filetype:log "login"', desc: 'Login activity log files', descFa: 'فایل‌های لاگ فعالیت ورود' },
    { query: 'filetype:log "access"', desc: 'Access log files', descFa: 'فایل‌های لاگ دسترسی' },
    { query: 'inurl:access.log', desc: 'Apache access log files', descFa: 'فایل‌های لاگ دسترسی آپاچی' },
    { query: 'inurl:error.log', desc: 'Apache error log files', descFa: 'فایل‌های لاگ خطای آپاچی' },
    { query: 'filetype:log "root"', desc: 'Log files with root user references', descFa: 'فایل‌های لاگ با کاربر روت' },
    { query: 'filetype:log "127.0.0.1"', desc: 'Log files with localhost IP entries', descFa: 'فایل‌های لاگ با آی‌پی لوکال' },
  ],
  'Backup Files': [
    { query: 'filetype:bak', desc: 'Generic backup files', descFa: 'فایل‌های پشتیبان عمومی' },
    { query: 'filetype:old', desc: 'Old versioned files', descFa: 'فایل‌های نسخه قدیمی' },
    { query: 'filetype:backup', desc: 'Backup extension files', descFa: 'فایل‌های با پسوند backup' },
    { query: 'filetype:swp', desc: 'Vim swap files', descFa: 'فایل‌های swap ویرایشگر Vim' },
    { query: 'filetype:save', desc: 'Saved game/data files', descFa: 'فایل‌های ذخیره داده' },
    { query: 'filetype:dump', desc: 'System dump files', descFa: 'فایل‌های dump سیستم' },
    { query: 'inurl:backup', desc: 'Pages in backup directories', descFa: 'صفحات در دایرکتوری‌های پشتیبان' },
    { query: '"backup" filetype:zip', desc: 'ZIP backup archives', descFa: 'آرشیوهای ZIP پشتیبان' },
    { query: '"backup" filetype:tar', desc: 'TAR backup archives', descFa: 'آرشیوهای TAR پشتیبان' },
    { query: 'filetype:sql "backup"', desc: 'SQL backup files', descFa: 'فایل‌های SQL پشتیبان' },
    { query: 'filetype:gz "backup"', desc: 'GZip backup archives', descFa: 'آرشیوهای GZip پشتیبان' },
    { query: 'filetype:rar "backup"', desc: 'RAR backup archives', descFa: 'آرشیوهای RAR پشتیبان' },
  ],
  'Email/Info': [
    { query: 'intext:"@gmail.com" "password"', desc: 'Gmail credentials in plain text', descFa: 'اعتبار Gmail در متن ساده' },
    { query: 'intext:"@yahoo.com" "password"', desc: 'Yahoo credentials in plain text', descFa: 'اعتبار Yahoo در متن ساده' },
    { query: 'filetype:xls "email" "password"', desc: 'Excel files with emails and passwords', descFa: 'فایل‌های Excel با ایمیل و رمز' },
    { query: 'filetype:xlsx "email"', desc: 'Excel files containing email addresses', descFa: 'فایل‌های Excel با آدرس ایمیل' },
    { query: 'intext:"customer" filetype:csv', desc: 'CSV files with customer data', descFa: 'فایل‌های CSV با داده مشتری' },
    { query: 'intitle:"index of" "contacts.csv"', desc: 'Contact CSV files exposed', descFa: 'فایل‌های CSV مخاطبین' },
    { query: 'filetype:vcf "phone"', desc: 'vCard contact files with phone numbers', descFa: 'فایل‌های vCard با شماره تلفن' },
    { query: 'filetype:pdf "email address" "password"', desc: 'PDFs with email and password data', descFa: 'PDF با ایمیل و رمز عبور' },
    { query: '"leaked" "password" filetype:txt', desc: 'Leaked password text files', descFa: 'فایل‌های متنی رمز لو رفته' },
    { query: 'filetype:xls "SSN" "address"', desc: 'Excel files with SSN and address', descFa: 'فایل‌های Excel با شماره تامین اجتماعی' },
  ],
  'Network Devices': [
    { query: 'intitle:"router setup"', desc: 'Router setup/configuration pages', descFa: 'صفحات تنظیمات روتر' },
    { query: 'intitle:"wireless router"', desc: 'Wireless router access pages', descFa: 'صفحات دسترسی روتر بی‌سیم' },
    { query: 'inurl:setup.cgi', desc: 'CGI setup interfaces', descFa: 'رابط‌های تنظیمات CGI' },
    { query: 'inurl:status.cgi', desc: 'CGI status pages', descFa: 'صفحات وضعیت CGI' },
    { query: 'intitle:"login" "router"', desc: 'Router login pages', descFa: 'صفحات ورود روتر' },
    { query: 'intitle:"Linksys" "management"', desc: 'Linksys router management', descFa: 'مدیریت روتر Linksys' },
    { query: 'inurl:main.cgi', desc: 'Main CGI interfaces', descFa: 'رابط‌های اصلی CGI' },
    { query: 'intitle:"device status" "router"', desc: 'Router device status pages', descFa: 'صفحات وضعیت دستگاه روتر' },
    { query: 'intitle:"web admin" "teltonika"', desc: 'Teltonika router admin pages', descFa: 'صفحات ادمین روتر Teltonika' },
    { query: 'inurl:"home.htm" "router"', desc: 'Router home configuration pages', descFa: 'صفحات تنظیمات خانگی روتر' },
    { query: 'intitle:"MikroTik" "admin"', desc: 'MikroTik router admin access', descFa: 'دسترسی ادمین روتر MikroTik' },
    { query: 'inurl:"cgi-bin" "status"', desc: 'CGI-bin status interfaces', descFa: 'رابط‌های وضعیت cgi-bin' },
  ],
};

const catKeys = Object.keys(dorkCategories);
const totalDorks = catKeys.reduce((s, k) => s + dorkCategories[k].length, 0);

const ops = [
  { value: 'intitle:', label: 'intitle:', placeholder: 'page title' },
  { value: 'inurl:', label: 'inurl:', placeholder: 'URL part' },
  { value: 'filetype:', label: 'filetype:', placeholder: 'ext (pdf, sql, ...)' },
  { value: 'intext:', label: 'intext:', placeholder: 'body text' },
  { value: 'site:', label: 'site:', placeholder: 'domain.com' },
  { value: 'allintitle:', label: 'allintitle:', placeholder: 'words in title' },
  { value: 'allinurl:', label: 'allinurl:', placeholder: 'words in URL' },
  { value: 'inanchor:', label: 'inanchor:', placeholder: 'anchor text' },
  { value: 'link:', label: 'link:', placeholder: 'URL' },
  { value: 'cache:', label: 'cache:', placeholder: 'URL' },
  { value: 'related:', label: 'related:', placeholder: 'URL' },
  { value: '"', label: '"exact phrase"', placeholder: 'exact phrase' },
];

export default function render(lang) {
  const fa = lang === 'fa';

  const catNames = catKeys;
  const CAT_IDS = catNames.map((_, i) => `gd-cat-${i}`);
  const chipActive = (idx) => `gd-chip-${idx}`;

  return `
<style>
#google-dorks *{box-sizing:border-box}
#google-dorks .rtl{direction:rtl;text-align:right}
#google-dorks .sec-title{font-size:1.3rem;font-weight:600;margin-bottom:12px;color:var(--primary,#00c8ff)}
#google-dorks .gd-tabs{display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid var(--border,#333)}
#google-dorks .gd-tab{padding:10px 20px;cursor:pointer;background:transparent;border:none;color:var(--text,#ccc);font-size:14px;opacity:.6;transition:all .2s;border-bottom:2px solid transparent;margin-bottom:-2px}
#google-dorks .gd-tab.active{opacity:1;color:var(--primary,#00c8ff);border-bottom-color:var(--primary,#00c8ff)}
#google-dorks .gd-pane{display:none}
#google-dorks .gd-pane.active{display:block}
#google-dorks .gd-search{width:100%;padding:10px 14px;border:1px solid var(--border,#444);border-radius:8px;background:var(--bg-card,#1a1a2e);color:var(--text,#eee);font-size:14px;margin-bottom:12px}
#google-dorks .gd-search::placeholder{color:var(--text-dim,#666)}
#google-dorks .gd-chips{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
#google-dorks .gd-chip{padding:6px 14px;border-radius:20px;border:1px solid var(--border,#444);background:transparent;color:var(--text,#ccc);cursor:pointer;font-size:13px;transition:all .2s;white-space:nowrap}
#google-dorks .gd-chip.active{background:var(--primary,#00c8ff);color:#000;border-color:var(--primary,#00c8ff)}
#google-dorks .gd-chip .badge{display:inline-block;background:rgba(255,255,255,.2);border-radius:10px;padding:0 7px;margin-left:5px;font-size:11px;line-height:18px}
#google-dorks .gd-chip.active .badge{background:rgba(0,0,0,.2)}
#google-dorks .gd-cat{margin-bottom:20px}
#google-dorks .gd-cat.hidden{display:none}
#google-dorks .gd-cat-header{display:flex;align-items:center;gap:10px;margin-bottom:10px;padding:8px 12px;background:var(--bg-card,#1a1a2e);border-radius:8px;border:1px solid var(--border,#333)}
#google-dorks .gd-cat-title{font-weight:600;font-size:15px;flex:1;color:var(--text,#eee)}
#google-dorks .gd-cat-badge{background:var(--primary,#00c8ff);color:#000;border-radius:12px;padding:2px 10px;font-size:12px;font-weight:600}
#google-dorks .gd-cat-copy{background:transparent;border:1px solid var(--border,#444);color:var(--text,#ccc);padding:4px 12px;border-radius:6px;cursor:pointer;font-size:12px;transition:all .2s}
#google-dorks .gd-cat-copy:hover{background:var(--primary,#00c8ff);color:#000;border-color:var(--primary,#00c8ff)}
#google-dorks .gd-item{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;margin-bottom:6px;background:var(--bg-card,#1a1a2e);border-radius:8px;border:1px solid var(--border,#2a2a3e);transition:border-color .2s}
#google-dorks .gd-item:hover{border-color:var(--primary,#00c8ff44)}
#google-dorks .gd-item-code{flex:1;min-width:0}
#google-dorks .gd-item-query{font-family:'Courier New',monospace;font-size:13px;color:var(--primary,#00c8ff);word-break:break-all;line-height:1.4;overflow-wrap:break-word}
#google-dorks .gd-item-desc{font-size:12px;color:var(--text-dim,#888);margin-top:2px}
#google-dorks .gd-item-actions{display:flex;gap:6px;flex-shrink:0;align-items:center}
#google-dorks .gd-item-copy,.gd-item-fav{background:transparent;border:1px solid var(--border,#444);color:var(--text,#ccc);padding:4px 10px;border-radius:6px;cursor:pointer;font-size:12px;transition:all .2s;line-height:1.4}
#google-dorks .gd-item-copy:hover{background:var(--primary,#00c8ff);color:#000;border-color:var(--primary,#00c8ff)}
#google-dorks .gd-item-fav:hover{border-color:var(--warning,#ffc107)}
#google-dorks .gd-item-fav.faved{background:var(--warning,#ffc107);color:#000;border-color:var(--warning,#ffc107)}
#google-dorks .gd-builder-row{display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap}
#google-dorks .gd-builder-row select,.gd-builder-row input{flex:1;min-width:120px;padding:9px 12px;border:1px solid var(--border,#444);border-radius:6px;background:var(--bg-card,#1a1a2e);color:var(--text,#eee);font-size:13px}
#google-dorks .gd-builder-row select option{background:#1a1a2e}
#google-dorks .gd-builder-op{display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--bg-card,#1a1a2e);border:1px solid var(--border,#333);border-radius:6px;margin-bottom:6px;font-size:13px}
#google-dorks .gd-builder-op .op-text{font-family:'Courier New',monospace;color:var(--primary,#00c8ff);flex:1;word-break:break-all}
#google-dorks .gd-builder-op .op-del{background:transparent;border:none;color:var(--danger,#ff4444);cursor:pointer;font-size:16px;padding:0 4px}
#google-dorks .gd-builder-actions{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap}
#google-dorks .gd-builder-actions button{padding:9px 20px;border-radius:6px;cursor:pointer;font-size:13px;transition:all .2s}
#google-dorks .gd-btn-primary{background:var(--primary,#00c8ff);color:#000;border:none;font-weight:600}
#google-dorks .gd-btn-primary:hover{filter:brightness(1.1)}
#google-dorks .gd-btn-secondary{background:transparent;border:1px solid var(--border,#444);color:var(--text,#ccc)}
#google-dorks .gd-btn-secondary:hover{border-color:var(--text,#888)}
#google-dorks .gd-result{display:none;margin-top:12px;padding:14px;background:var(--bg-card,#1a1a2e);border:1px solid var(--primary,#00c8ff44);border-radius:8px}
#google-dorks .gd-result.show{display:block}
#google-dorks .gd-result pre{font-family:'Courier New',monospace;font-size:14px;color:var(--primary,#00c8ff);margin:0 0 10px 0;padding:10px;background:rgba(0,0,0,.3);border-radius:6px;overflow-x:auto;white-space:pre-wrap;word-break:break-all}
#google-dorks .gd-summary{font-size:13px;color:var(--text-dim,#888);margin-bottom:12px;padding:8px 12px;background:var(--bg-card,#1a1a2e);border-radius:6px}
#google-dorks .gd-fav-section{margin-bottom:16px;padding:10px 14px;background:var(--bg-card,#1a1a2e);border:1px dashed var(--warning,#ffc10788);border-radius:8px}
#google-dorks .gd-fav-section.empty{display:none}
#google-dorks .gd-fav-title{font-size:14px;font-weight:600;color:var(--warning,#ffc107);margin-bottom:8px;display:flex;align-items:center;gap:8px}
#google-dorks .gd-fav-dorks{display:flex;flex-direction:column;gap:6px}
#google-dorks .gd-fav-tag{padding:2px 8px;background:var(--warning,#ffc10722);color:var(--warning,#ffc107);border-radius:4px;font-size:11px;margin-left:6px}
</style>
<div id="google-dorks"${fa ? ' dir="rtl"' : ''}>
  <div class="sec-title">${fa ? 'مرجع جستجوی Google Dork' : 'Google Dork Reference'} <span style="font-size:12px;opacity:.6">(${totalDorks} dorks)</span></div>
  <div class="gd-tabs" id="gd-tabs">
    <button class="gd-tab active" data-gd-tab="gd-ref">${fa ? 'مرجع Dork' : 'Dork Reference'}</button>
    <button class="gd-tab" data-gd-tab="gd-builder">${fa ? 'ساخت جستجو' : 'Search Builder'}</button>
  </div>

  <!-- Reference Tab -->
  <div class="gd-pane active" id="gd-ref">
    <input id="gd-fsearch" class="gd-search" placeholder="${fa ? 'جستجوی dorkها...' : 'Search dorks...'}" spellcheck="false">
    <div class="gd-chips" id="gd-chips">
      <button class="gd-chip active" data-gd-cat="all">${fa ? 'همه' : 'All'} <span class="badge">${totalDorks}</span></button>
      ${catNames.map((n, i) => `<button class="gd-chip" data-gd-cat="${CAT_IDS[i]}">${fa ? getFaCat(n) : n} <span class="badge">${dorkCategories[n].length}</span></button>`).join('')}
    </div>

    <div class="gd-fav-section" id="gd-fav-section">
      <div class="gd-fav-title">&#9733; ${fa ? 'مورد علاقه‌ها' : 'Favorites'} <span id="gd-fav-count" style="font-size:12px;opacity:.6"></span></div>
      <div id="gd-fav-dorks"></div>
    </div>

    <div id="gd-cats">
      ${catNames.map((n, i) => `
      <div class="gd-cat" id="${CAT_IDS[i]}">
        <div class="gd-cat-header">
          <span class="gd-cat-title">${fa ? getFaCat(n) : n}</span>
          <span class="gd-cat-badge">${dorkCategories[n].length}</span>
          <button class="gd-cat-copy" data-gd-copyall="${i}">${fa ? 'کپی همه' : 'Copy All'}</button>
        </div>
        ${dorkCategories[n].map((d, j) => {
          const qEsc = esc(d.query);
          const fkey = `${i}:${j}`;
          return `
        <div class="gd-item" data-gd-idx="${fkey}">
          <div class="gd-item-code">
            <div class="gd-item-query">${qEsc}</div>
            <div class="gd-item-desc">${fa ? d.descFa : d.desc}</div>
          </div>
          <div class="gd-item-actions">
            <button class="gd-item-copy" data-gd-copy="${qEsc}" title="${fa ? 'کپی' : 'Copy'}">${fa ? 'کپی' : 'Copy'}</button>
            <button class="gd-item-fav" data-gd-fav="${qEsc}" title="${fa ? 'مورد علاقه' : 'Favorite'}">&#9733;</button>
          </div>
        </div>`}).join('')}
      </div>`).join('')}
    </div>
  </div>

  <!-- Builder Tab -->
  <div class="gd-pane" id="gd-builder">
    <div class="gd-builder-row">
      <select id="gd-op-select">
        <option value="">${fa ? 'انتخاب عملگر' : 'Select operator'}</option>
        ${ops.map(o => `<option value="${o.value}" data-place="${o.placeholder}">${o.label}</option>`).join('')}
      </select>
      <input id="gd-op-input" placeholder="${fa ? 'مقدار...' : 'Value...'}">
      <button class="gd-btn-secondary" id="gd-op-add" style="padding:9px 18px;border-radius:6px;cursor:pointer;flex-shrink:0">+ ${fa ? 'افزودن' : 'Add'}</button>
    </div>
    <div id="gd-op-list"></div>
    <div class="gd-builder-actions">
      <button class="gd-btn-primary" id="gd-op-gen">${fa ? 'تولید جستجو' : 'Generate Query'}</button>
      <button class="gd-btn-secondary" id="gd-op-clear">${fa ? 'پاک کردن' : 'Clear'}</button>
    </div>
    <div class="gd-result" id="gd-builder-result">
      <pre id="gd-builder-query"></pre>
      <button class="gd-item-copy" data-gd-copy-from="gd-builder-query">${fa ? 'کپی' : 'Copy'}</button>
    </div>
  </div>
</div>`;
}

export function init(lang) {
  const fa = lang === 'fa';
  const container = document.getElementById('content');

  function getFavs() {
    try { return JSON.parse(localStorage.getItem('gd-favs') || '[]'); } catch { return []; }
  }

  function setFavs(favs) {
    localStorage.setItem('gd-favs', JSON.stringify(favs));
    updateFavsUI(favs);
  }

  function updateFavsUI(favs) {
    const section = document.getElementById('gd-fav-section');
    const list = document.getElementById('gd-fav-dorks');
    const cnt = document.getElementById('gd-fav-count');
    if (!section || !list) return;
    if (!favs || !favs.length) {
      section.classList.add('empty');
      return;
    }
    section.classList.remove('empty');
    cnt.textContent = `(${favs.length})`;
    list.innerHTML = favs.map(q => `
      <div class="gd-item">
        <div class="gd-item-code">
          <div class="gd-item-query">${esc(q)}</div>
        </div>
        <div class="gd-item-actions">
          <span class="gd-fav-tag">&#9733;</span>
          <button class="gd-item-copy" data-gd-copy="${esc(q)}">${fa ? 'کپی' : 'Copy'}</button>
          <button class="gd-item-fav faved" data-gd-fav="${esc(q)}">&#9733;</button>
        </div>
      </div>`).join('');
    // rebind fav buttons inside fav section
    list.querySelectorAll('[data-gd-fav]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const q = btn.getAttribute('data-gd-fav');
        let favs = getFavs();
        const idx = favs.indexOf(q);
        if (idx > -1) favs.splice(idx, 1);
        setFavs(favs);
        // also update main items
        document.querySelectorAll(`[data-gd-fav="${q}"]`).forEach(b => b.classList.toggle('faved', false));
      });
    });
  }

  // initialize fav icons
  function syncFavIcons() {
    const favs = getFavs();
    document.querySelectorAll('[data-gd-fav]').forEach(btn => {
      btn.classList.toggle('faved', favs.indexOf(btn.getAttribute('data-gd-fav')) > -1);
    });
    updateFavsUI(favs);
  }

  container.addEventListener('click', (e) => {
    const target = e.target;

    // Tab switching
    const tab = target.closest('.gd-tab');
    if (tab && tab.closest('#gd-tabs')) {
      container.querySelectorAll('.gd-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.gd-pane').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const pane = document.getElementById(tab.getAttribute('data-gd-tab'));
      if (pane) pane.classList.add('active');
      return;
    }

    // Copy single
    const copyBtn = target.closest('[data-gd-copy]');
    if (copyBtn) {
      navigator.clipboard.writeText(copyBtn.getAttribute('data-gd-copy'));
      const orig = copyBtn.textContent;
      copyBtn.textContent = fa ? '✓ کپی شد' : '✓ Copied';
      setTimeout(() => { copyBtn.textContent = orig; }, 1200);
      return;
    }

    // Copy from element
    const copyFrom = target.closest('[data-gd-copy-from]');
    if (copyFrom) {
      const el = document.getElementById(copyFrom.getAttribute('data-gd-copy-from'));
      if (el) {
        navigator.clipboard.writeText(el.textContent);
        const orig = copyFrom.textContent;
        copyFrom.textContent = fa ? '✓ کپی شد' : '✓ Copied';
        setTimeout(() => { copyFrom.textContent = orig; }, 1200);
      }
      return;
    }

    // Copy All
    const copyAll = target.closest('[data-gd-copyall]');
    if (copyAll) {
      const idx = parseInt(copyAll.getAttribute('data-gd-copyall'));
      const cat = catKeys[idx];
      if (cat) {
        const text = dorkCategories[cat].map(d => d.query).join('\n');
        navigator.clipboard.writeText(text);
        const orig = copyAll.textContent;
        copyAll.textContent = fa ? '✓ کپی شد' : '✓ Copied';
        setTimeout(() => { copyAll.textContent = orig; }, 1200);
      }
      return;
    }

    // Favorite toggle
    const favBtn = target.closest('[data-gd-fav]');
    if (favBtn) {
      const q = favBtn.getAttribute('data-gd-fav');
      let favs = getFavs();
      const idx = favs.indexOf(q);
      if (idx > -1) {
        favs.splice(idx, 1);
      } else {
        favs.push(q);
      }
      setFavs(favs);
      syncFavIcons();
      return;
    }

    // Category chip
    const chip = target.closest('.gd-chip');
    if (chip && chip.closest('#gd-chips')) {
      document.querySelectorAll('#gd-chips .gd-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.getAttribute('data-gd-cat');
      document.querySelectorAll('#gd-cats .gd-cat').forEach(c => {
        if (cat === 'all') {
          c.classList.remove('hidden');
        } else {
          c.classList.toggle('hidden', c.id !== cat);
        }
      });
      return;
    }
  });

  // Search filtering
  const searchInput = document.getElementById('gd-fsearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('#gd-cats .gd-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? '' : 'none';
      });
      document.querySelectorAll('#gd-cats .gd-cat').forEach(cat => {
        const visible = Array.from(cat.querySelectorAll('.gd-item')).some(i => i.style.display !== 'none');
        cat.style.display = visible ? '' : 'none';
      });
    });
  }

  // Search Builder
  const opSelect = document.getElementById('gd-op-select');
  const opInput = document.getElementById('gd-op-input');
  const addBtn = document.getElementById('gd-op-add');
  const opList = document.getElementById('gd-op-list');
  const genBtn = document.getElementById('gd-op-gen');
  const clearBtn = document.getElementById('gd-op-clear');
  const result = document.getElementById('gd-builder-result');
  const queryPre = document.getElementById('gd-builder-query');

  const builderOps = [];

  function renderBuilderOps() {
    opList.innerHTML = builderOps.map((item, i) =>
      `<div class="gd-builder-op">
        <span class="op-text">${esc(item)}</span>
        <button class="op-del" data-gd-delop="${i}">&times;</button>
      </div>`
    ).join('');
  }

  if (opSelect && opInput && addBtn && opList) {
    // Update input placeholder based on selection
    opSelect.addEventListener('change', () => {
      const opt = opSelect.options[opSelect.selectedIndex];
      if (opt && opt.dataset.place) {
        opInput.placeholder = opt.dataset.place;
      }
    });

    addBtn.addEventListener('click', () => {
      const op = opSelect.value;
      const val = opInput.value.trim();
      if (!val) return;
      const combined = op + val;
      builderOps.push(combined);
      renderBuilderOps();
      opInput.value = '';
      opInput.focus();
    });

    opInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addBtn.click();
    });

    // Remove op
    opList.addEventListener('click', (e) => {
      const del = e.target.closest('[data-gd-delop]');
      if (del) {
        const idx = parseInt(del.getAttribute('data-gd-delop'));
        builderOps.splice(idx, 1);
        renderBuilderOps();
      }
    });
  }

  if (genBtn && result && queryPre) {
    genBtn.addEventListener('click', () => {
      if (!builderOps.length) return;
      const query = builderOps.join(' ');
      queryPre.textContent = query;
      result.classList.add('show');
    });
  }

  if (clearBtn && opList && result && queryPre) {
    clearBtn.addEventListener('click', () => {
      builderOps.length = 0;
      renderBuilderOps();
      result.classList.remove('show');
      queryPre.textContent = '';
    });
  }

  // init favs
  syncFavIcons();
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getFaCat(en) {
  const map = {
    'SQL Injection': 'SQL Injection',
    'File Upload': 'آپلود فایل',
    'Directory Listing': 'لیست دایرکتوری',
    'Sensitive Files': 'فایل‌های حساس',
    'Login Pages': 'صفحات ورود',
    'Config Files': 'فایل‌های کانفیگ',
    'Database Files': 'فایل‌های دیتابیس',
    'Cameras/IoT': 'دوربین‌ها/IoT',
    WordPress: 'وردپرس',
    Joomla: 'جوملا',
    'Admin Panels': 'پنل‌های ادمین',
    'Error Messages': 'پیام‌های خطا',
    'Log Files': 'فایل‌های لاگ',
    'Backup Files': 'فایل‌های پشتیبان',
    'Email/Info': 'ایمیل/اطلاعات',
    'Network Devices': 'دستگاه‌های شبکه',
  };
  return map[en] || en;
}
