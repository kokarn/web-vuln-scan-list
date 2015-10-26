'use strict';

module.exports = [
    '/dbadmin/', // phpMyAdmin
    '/mysql/',
    '/pma/', // phpMyAdmin
    'admin.cgi', // Shellshock
    'administrator.cgi', // Shellshock
    'assetmanager.asp', // https://www.exploit-db.com/exploits/12693/ https://www.exploit-db.com/exploits/12133/
    'assetmanager.aspx', // https://www.exploit-db.com/exploits/12693/ https://www.exploit-db.com/exploits/12133/
    'assetmanager.php', // https://www.exploit-db.com/exploits/12693/ https://www.exploit-db.com/exploits/12133/
    'backup.cgi', // Shellshock
    'cgi-bin-sdb/printenv', // Shellshock
    'cgi-bin/bash', // Shellshock
    'cgi-bin/common/attr', // open proxy test
    'cgi-bin/php', // Shellshock
    'cgi-bin/php4', // Shellshock
    'cgi-bin/php5-cli', // Shellshock
    'cgi-bin/php5', // Shellshock
    'cgi-bin/printenv', // Shellshock
    'cgi-bin/test', // Shellshock
    'cgi-sys/php5', // Shellshock
    'concept.cgi', // Shellshock
    'contact.cgi', // Shellshock
    'count.cgi', // Shellshock
    'counter.cgi', // Shellshock
    'defaultwebpage.cgi', // Shellshock
    'elastixneo', // ElastixNeo Theme vulnerability
    'entropysearch.cgi', // Shellshock
    'env.cgi', // Shellshock
    'fire.cgi', // Shellshock
    'firewall.cgi', // Shellshock
    'formmail.cgi', // Shellshock
    'forum.cgi', // Shellshock
    'getheaders2.php',
    'getheaders9.php',
    'hello.cgi', // Shellshock
    'helpdesk.cgi', // Shellshock
    'hnap1', // D-Link HNAP https://dl.packetstormsecurity.net/papers/attack/dlink_hnap_captcha.pdf
    'httptest.php',
    'hudson/script', // Shellshock via Jenkins http://jenkins-ci.org/content/cve-2014-6271-impact-jenkins
    'index.cgi', // Shellshock
    'index2.cgi', // Shellshock
    'info.cgi', // Shellshock
    'kontakt.cgi', // Shellshock
    'login.cgi', // Shellshock
    'main.cgi', // Shellshock
    'meme.cgi', // Shellshock
    'menubcm.js', // BSNL vuln https://dl.packetstormsecurity.net/papers/attack/pwning-bsnl.pdf
    'muieblackcat', // Muieblackcat http://eromang.zataz.com/2011/08/14/suc027-muieblackcat-setup-php-web-scanner-robot/
    'myadmin', // phpMyAdmin
    'mysqlmanager', // phpMyAdmin
    'ncsi.txt',
    'p/m/a', // phpMyAdmin
    'php-my-admin', // phpMyAdmin
    'php-myadmin', // phpMyAdmin
    'phpmanager', // phpMyAdmin
    'phpmy-admin', // phpMyAdmin
    'phppath/cgi_wrapper', // Shellshock
    'phppath/php', // Shellshock
    'pma2005', // phpMyAdmin
    'propfind /webdav/',
    'query.cgi', // Shellshock
    'reboot.cgi', // Shellshock
    'recent.cgi', // Shellshock
    'report.cgi', // Shellshock
    'sat-ir-web.pl', // Shellshock
    'scripts/setup.php', // phpMyAdmin setup path
    'sqlite/main.php', // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'sqlitemanager-1.2.0/main.php',  // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'sqlitemanager-1.2.4/main.php',  // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'sqlitemanager/main.php', // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'sqlmanager', // phpMyAdmin
    'sqlweb', // phpMyAdmin
    'supply.cgi', // Shellshock
    'test.cgi', // Shellshock
    'test.sh',
    'testproxy.php', // open proxy test
    'tmunblock.cgi', // Shellshock
    'tools/tools.pl', // Shellshock
    'user/soapcaller.bs', // Morfeus scanner http://webcache.googleusercontent.com/search?q=cache:M0zbRuRSIMMJ:stateofsecurity.com/%3Fp%3D467+&cd=1&hl=en&ct=clnk&gl=se
    'webmap.cgi', // Shellshock
    'whois.cgi', // Shellshock
    'zmap.io' // https://zmap.io/
];
