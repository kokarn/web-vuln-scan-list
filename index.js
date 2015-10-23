'use strict';

module.exports = [
    'admin.cgi', // Shellshock
    'administrator.cgi', // Shellshock
    'assetmanager.asp', // https://www.exploit-db.com/exploits/12693/ https://www.exploit-db.com/exploits/12133/
    'assetmanager.aspx', // https://www.exploit-db.com/exploits/12693/ https://www.exploit-db.com/exploits/12133/
    'assetmanager.php', // https://www.exploit-db.com/exploits/12693/ https://www.exploit-db.com/exploits/12133/
    'backup.cgi', // Shellshock
    'cgi-bin/bash', // Shellshock
    'cgi-bin/common/attr', // open proxy test
    'cgi-bin/printenv', // Shellshock
    'cgi-bin/test', // Shellshock
    'concept.cgi', // Shellshock
    'contact.cgi', // Shellshock
    'count.cgi', // Shellshock
    'counter.cgi', // Shellshock
    'defaultwebpage.cgi', // Shellshock
    'env.cgi', // Shellshock
    'fire.cgi', // Shellshock
    'firewall.cgi', // Shellshock
    'formmail.cgi', // Shellshock
    'getheaders2.php',
    'getheaders9.php',
    'hello.cgi', // Shellshock
    'helpdesk.cgi', // Shellshock
    'hnap1', // D-Link HNAP https://dl.packetstormsecurity.net/papers/attack/dlink_hnap_captcha.pdf
    'hudson/script', // Shellshock via Jenkins http://jenkins-ci.org/content/cve-2014-6271-impact-jenkins
    'index.cgi', // Shellshock
    'index2.cgi', // Shellshock
    'info.cgi', // Shellshock
    'kontakt.cgi', // Shellshock
    'login.cgi', // Shellshock
    'main.cgi', // Shellshock
    'meme.cgi', // Shellshock
    'muieblackcat', // Muieblackcat http://eromang.zataz.com/2011/08/14/suc027-muieblackcat-setup-php-web-scanner-robot/
    'ncsi.txt',
    'phppath/cgi_wrapper', // Shellshock
    'propfind /webdav/',
    'query.cgi', // Shellshock
    'reboot.cgi', // Shellshock
    'report.cgi', // Shellshock
    'scripts/setup.php', // phpMyAdmin setup path
    'sqlite/main.php', // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'sqlitemanager-1.2.0/main.php',  // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'sqlitemanager-1.2.4/main.php',  // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'sqlitemanager/main.php', // SQLiteManager https://www.exploit-db.com/exploits/24320/ and more
    'supply.cgi', // Shellshock
    'test.cgi', // Shellshock
    'test.sh',
    'testproxy.php', // open proxy test
    'tmunblock.cgi', // Shellshock
    'user/soapcaller.bs', // Morfeus scanner http://webcache.googleusercontent.com/search?q=cache:M0zbRuRSIMMJ:stateofsecurity.com/%3Fp%3D467+&cd=1&hl=en&ct=clnk&gl=se
    'webmap.cgi', // Shellshock
    'whois.cgi', // Shellshock
    'zmap.io' // https://zmap.io/
];
