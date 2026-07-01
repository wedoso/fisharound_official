(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-language-toggle]");
  const languageSelect = document.querySelector("[data-language-select]");
  const languages = ["en", "zh", "zh-Hant", "ja", "ko"];
  const savedLanguage = localStorage.getItem("fish-around-language");
  const browserLanguage = navigator.language.toLowerCase();
  const preferredLanguage = browserLanguage.startsWith("zh-tw") || browserLanguage.startsWith("zh-hk") || browserLanguage.startsWith("zh-hant")
    ? "zh-Hant"
    : browserLanguage.startsWith("zh")
    ? "zh"
    : (browserLanguage.startsWith("ja") ? "ja" : (browserLanguage.startsWith("ko") ? "ko" : "en"));

  const japanese = {
    "Fish Around": "Fish Around",
    "a tiny pond": "小さな池",
    "Home": "ホーム",
    "Privacy": "プライバシー",
    "Support": "サポート",
    "A quiet iPhone & iPad game": "静かなiPhone・iPadゲーム",
    "Nothing to finish. Just spend a little time by the water.": "終わらせることはありません。ただ水辺で少し過ごすだけ。",
    "Meet four little fish, arrange a peaceful illustrated pond, and collect the photo memories they bring back.": "4匹の小さな魚と出会い、穏やかなイラストの池を飾り、魚たちが持ち帰る写真の思い出を集めましょう。",
    "Coming soon on the": "近日公開",
    "App Store": "App Store",
    "Get support →": "サポートを見る →",
    "Inside the pond": "池の中",
    "Four personalities. One soft place to pause.": "4つの性格。ひと息つける、やわらかな場所。",
    "Gentle interactions": "やさしい交流",
    "Tap, stroke, or rest nearby. Every fish responds in its own way.": "タップしたり、なでたり、そばで休んだり。魚たちはそれぞれ違う反応をします。",
    "Your own pond": "あなたの池",
    "Unlock seasonal themes and arrange little decorations without pressure.": "季節のテーマをゆっくり解放し、小さな装飾を気軽に並べられます。",
    "Photo memories": "写真の思い出",
    "Build familiarity and discover keepsake photos brought back by the fish.": "魚たちと親しくなり、持ち帰ってくれる記念写真を見つけましょう。",
    "Quiet by design": "静けさのための設計",
    "Offline, private, and free from ads, purchases, accounts, and streaks.": "オフラインでプライベート。広告、購入、アカウント、連続記録はありません。",
    "Private by default": "最初からプライベート",
    "Your pond stays on your device.": "あなたの池は端末の中に残ります。",
    "Fish Around works offline and does not use accounts, analytics, advertising trackers, or third-party SDKs.": "Fish Aroundはオフラインで動作し、アカウント、分析、広告トラッカー、第三者SDKを使いません。",
    "Read the privacy policy": "プライバシーポリシーを読む",
    "Privacy Policy": "プライバシーポリシー",
    "Legal": "法的情報",
    "Effective June 24, 2026": "発効日: 2026年6月24日",
    "Our approach": "私たちの考え方",
    "Fish Around is designed to work offline and does not require an account.": "Fish Aroundはオフラインで使えるように設計されており、アカウントは必要ありません。",
    "Data collection": "データ収集",
    "Fish Around does not collect, transmit, sell, or share personal data. The app does not include advertising, analytics, cross-app tracking, or third-party SDKs.": "Fish Aroundは個人データを収集、送信、販売、共有しません。アプリには広告、分析、アプリ横断トラッキング、第三者SDKは含まれません。",
    "Data stored on your device": "端末に保存されるデータ",
    "Game progress and preferences—such as fish familiarity, bubbles, unlocked themes, decorations, collected pond photos, language, and audio settings—are stored locally on your device. You can remove this data with the in-app “Forget memory” action or by deleting the app.": "魚との親しさ、泡、解放済みテーマ、装飾、集めた池の写真、言語、音声設定などの進行状況と設定は、端末内に保存されます。アプリ内の「記憶を忘れる」操作、またはアプリの削除で消去できます。",
    "Photo library access": "写真ライブラリへのアクセス",
    "Fish Around requests add-only photo library access only after you choose to save a pond image. The permission is used solely to add the selected image to your system photo library. The app does not read or browse your existing photos.": "Fish Aroundは、池の画像を保存することを選んだ後にのみ、写真を追加するためのアクセスを求めます。この権限は選択した画像をシステムの写真ライブラリに追加する目的だけに使われ、既存の写真を読んだり閲覧したりしません。",
    "Pond reminders": "池のリマインダー",
    "After iOS notification permission is granted, pond reminders are on by default. Fish Around schedules local notifications on your device after periods of inactivity, and opening the app resets the timer for the next time you leave. Reminder content is selected from local progress such as fish familiarity and collected photos. This information is not sent to a server. You can disable reminders in the app or in iOS Settings.": "iOSの通知許可が得られると、池のリマインダーはデフォルトでオンになります。Fish Aroundは、しばらく使っていない期間の後に端末上でローカル通知を予定し、アプリを開くと次に離れたときの通知タイマーがリセットされます。通知文は魚との親しさや集めた写真など、端末内の進行状況から選ばれます。この情報はサーバーへ送信されません。リマインダーはアプリ内またはiOS設定で無効にできます。",
    "Children’s privacy": "子どものプライバシー",
    "Because Fish Around does not collect personal data or provide accounts, advertising, purchases, or social features, it does not knowingly collect information from children.": "Fish Aroundは個人データを収集せず、アカウント、広告、購入、ソーシャル機能を提供しないため、子どもから情報を意図的に収集することはありません。",
    "Changes to this policy": "ポリシーの変更",
    "If the app’s data practices change, this policy and the App Store privacy disclosure will be updated before the changed behavior is released.": "アプリのデータの取り扱いが変わる場合、その変更をリリースする前に本ポリシーとApp Storeのプライバシー開示を更新します。",
    "Contact": "お問い合わせ",
    "For privacy questions, email ": "プライバシーに関する質問はメールでお問い合わせください: ",
    "Help by the pond": "池のそばのヘルプ",
    "Fish Around is an offline pond game for iPhone and iPad.": "Fish AroundはiPhoneとiPad向けのオフライン池ゲームです。",
    "Email support": "サポートにメール",
    "How do I restore progress?": "進行状況を復元するには？",
    "Progress is stored only on your device and currently does not sync through an account or iCloud. Deleting the app removes local progress.": "進行状況は端末内にのみ保存され、現在はアカウントやiCloudで同期されません。アプリを削除するとローカルの進行状況も削除されます。",
    "Why can’t I save a pond photo?": "池の写真を保存できないのはなぜ？",
    "Open iOS Settings, find Fish Around, and allow it to add photos. The app requests add-only access and cannot browse your existing library.": "iOSの設定を開き、Fish Aroundを見つけて写真の追加を許可してください。アプリは追加のみのアクセスを求め、既存のライブラリは閲覧できません。",
    "How do I reset the pond?": "池をリセットするには？",
    "Open Settings inside the app and choose “Forget memory.” Language and sound preferences are preserved.": "アプリ内の設定を開き、「記憶を忘れる」を選んでください。言語とサウンド設定は残ります。",
    "Does Fish Around require the internet?": "Fish Aroundにインターネットは必要ですか？",
    "No. The current release works offline and does not include accounts, advertising, analytics, or online purchases.": "いいえ。現在のリリースはオフラインで動作し、アカウント、広告、分析、オンライン購入は含まれません。",
    "How do pond reminders work?": "池のリマインダーはどう動きますか？",
    "Pond reminders are on by default after iOS notification permission is granted. Local reminders may appear after about 22 hours, 3 days, and 7 days away. Opening Fish Around resets the reminder timer for the next time you leave. You can turn them off in the app or in iOS Settings.": "iOSの通知許可が得られると、池のリマインダーはデフォルトでオンになります。離れてから約22時間、3日、7日後にローカル通知が表示されることがあります。Fish Aroundを開くと、次に離れたときの通知タイマーがリセットされます。アプリ内またはiOS設定でオフにできます。",
    "How do I report a bug?": "不具合を報告するには？",
    "Email us with your device model, iOS version, app version, what you expected, and what happened. A screenshot is helpful when available.": "端末モデル、iOSバージョン、アプリバージョン、期待した動作、実際に起きたことをメールでお知らせください。可能であればスクリーンショットも役立ちます。",
    "Still need help?": "まだお困りですか？",
    "Send a note and include as much detail as you can. We’ll reply from the support address below.": "できるだけ詳しい内容を添えてメールしてください。下記のサポートアドレスから返信します。",
    "This ripple went somewhere else.": "この波紋は別の場所へ行きました。",
    "The page you were looking for is not in this pond.": "お探しのページはこの池にはありません。",
    "Return to the pond": "池へ戻る"
  };

  const korean = {
    "Fish Around": "Fish Around",
    "a tiny pond": "작은 연못",
    "Home": "홈",
    "Privacy": "개인정보 보호",
    "Support": "지원",
    "A quiet iPhone & iPad game": "조용한 iPhone 및 iPad 게임",
    "Nothing to finish. Just spend a little time by the water.": "끝내야 할 일은 없습니다. 물가에서 잠시 머무르세요.",
    "Meet four little fish, arrange a peaceful illustrated pond, and collect the photo memories they bring back.": "네 마리 작은 물고기를 만나고, 평화로운 일러스트 연못을 꾸미며, 물고기들이 가져오는 사진 추억을 모아보세요.",
    "Coming soon on the": "곧 출시",
    "App Store": "App Store",
    "Get support →": "지원 받기 →",
    "Inside the pond": "연못 안",
    "Four personalities. One soft place to pause.": "네 가지 성격. 잠시 쉬어갈 부드러운 장소.",
    "Gentle interactions": "부드러운 상호작용",
    "Tap, stroke, or rest nearby. Every fish responds in its own way.": "톡 건드리거나, 쓰다듬거나, 곁에 머물러보세요. 물고기마다 자기 방식으로 반응합니다.",
    "Your own pond": "나만의 연못",
    "Unlock seasonal themes and arrange little decorations without pressure.": "계절 테마를 해제하고 작은 장식을 부담 없이 배치하세요.",
    "Photo memories": "사진 추억",
    "Build familiarity and discover keepsake photos brought back by the fish.": "물고기와 친해지고, 물고기들이 가져오는 기념 사진을 발견하세요.",
    "Quiet by design": "조용함을 위한 설계",
    "Offline, private, and free from ads, purchases, accounts, and streaks.": "오프라인, 개인정보 보호, 광고·구매·계정·연속 기록 없음.",
    "Private by default": "기본부터 비공개",
    "Your pond stays on your device.": "당신의 연못은 기기 안에 머뭅니다.",
    "Fish Around works offline and does not use accounts, analytics, advertising trackers, or third-party SDKs.": "Fish Around는 오프라인으로 작동하며 계정, 분석, 광고 추적기, 제3자 SDK를 사용하지 않습니다.",
    "Read the privacy policy": "개인정보 처리방침 읽기",
    "Privacy Policy": "개인정보 처리방침",
    "Legal": "법적 정보",
    "Effective June 24, 2026": "시행일: 2026년 6월 24일",
    "Our approach": "우리의 접근 방식",
    "Fish Around is designed to work offline and does not require an account.": "Fish Around는 오프라인으로 작동하도록 설계되었으며 계정이 필요하지 않습니다.",
    "Data collection": "데이터 수집",
    "Fish Around does not collect, transmit, sell, or share personal data. The app does not include advertising, analytics, cross-app tracking, or third-party SDKs.": "Fish Around는 개인 데이터를 수집, 전송, 판매 또는 공유하지 않습니다. 앱에는 광고, 분석, 앱 간 추적 또는 제3자 SDK가 포함되어 있지 않습니다.",
    "Data stored on your device": "기기에 저장되는 데이터",
    "Game progress and preferences—such as fish familiarity, bubbles, unlocked themes, decorations, collected pond photos, language, and audio settings—are stored locally on your device. You can remove this data with the in-app “Forget memory” action or by deleting the app.": "물고기 친밀도, 방울, 해제한 테마, 장식, 수집한 연못 사진, 언어, 오디오 설정 같은 진행 상황과 환경설정은 기기에 로컬로 저장됩니다. 앱 안의 “기억 지우기” 기능이나 앱 삭제로 제거할 수 있습니다.",
    "Photo library access": "사진 보관함 접근",
    "Fish Around requests add-only photo library access only after you choose to save a pond image. The permission is used solely to add the selected image to your system photo library. The app does not read or browse your existing photos.": "Fish Around는 연못 이미지를 저장하기로 선택한 뒤에만 사진 추가 권한을 요청합니다. 이 권한은 선택한 이미지를 시스템 사진 보관함에 추가하는 데만 쓰이며, 기존 사진을 읽거나 탐색하지 않습니다.",
    "Pond reminders": "연못 알림",
    "After iOS notification permission is granted, pond reminders are on by default. Fish Around schedules local notifications on your device after periods of inactivity, and opening the app resets the timer for the next time you leave. Reminder content is selected from local progress such as fish familiarity and collected photos. This information is not sent to a server. You can disable reminders in the app or in iOS Settings.": "iOS 알림 권한이 허용되면 연못 알림은 기본으로 켜집니다. Fish Around는 일정 기간 사용하지 않은 뒤 기기에서 로컬 알림을 예약하고, 앱을 열면 다음에 떠날 때의 알림 타이머가 다시 시작됩니다. 알림 내용은 물고기 친밀도와 수집 사진 같은 로컬 진행 상황에서 선택됩니다. 이 정보는 서버로 전송되지 않습니다. 알림은 앱 또는 iOS 설정에서 끌 수 있습니다.",
    "Children’s privacy": "아동 개인정보",
    "Because Fish Around does not collect personal data or provide accounts, advertising, purchases, or social features, it does not knowingly collect information from children.": "Fish Around는 개인 데이터를 수집하지 않고 계정, 광고, 구매, 소셜 기능을 제공하지 않으므로 아동의 정보를 의도적으로 수집하지 않습니다.",
    "Changes to this policy": "정책 변경",
    "If the app’s data practices change, this policy and the App Store privacy disclosure will be updated before the changed behavior is released.": "앱의 데이터 처리 방식이 바뀌면 변경된 동작을 출시하기 전에 본 정책과 App Store 개인정보 공개를 업데이트합니다.",
    "Contact": "문의",
    "For privacy questions, email ": "개인정보 관련 질문은 이메일로 문의하세요: ",
    "Help by the pond": "연못가 도움말",
    "Fish Around is an offline pond game for iPhone and iPad.": "Fish Around는 iPhone 및 iPad용 오프라인 연못 게임입니다.",
    "Email support": "지원 이메일 보내기",
    "How do I restore progress?": "진행 상황을 복원하려면?",
    "Progress is stored only on your device and currently does not sync through an account or iCloud. Deleting the app removes local progress.": "진행 상황은 기기에만 저장되며 현재 계정이나 iCloud로 동기화되지 않습니다. 앱을 삭제하면 로컬 진행 상황도 삭제됩니다.",
    "Why can’t I save a pond photo?": "연못 사진을 저장할 수 없는 이유는?",
    "Open iOS Settings, find Fish Around, and allow it to add photos. The app requests add-only access and cannot browse your existing library.": "iOS 설정을 열고 Fish Around를 찾아 사진 추가를 허용하세요. 앱은 추가 전용 접근만 요청하며 기존 보관함을 탐색할 수 없습니다.",
    "How do I reset the pond?": "연못을 초기화하려면?",
    "Open Settings inside the app and choose “Forget memory.” Language and sound preferences are preserved.": "앱 안의 설정을 열고 “기억 지우기”를 선택하세요. 언어와 소리 설정은 유지됩니다.",
    "Does Fish Around require the internet?": "Fish Around에 인터넷이 필요한가요?",
    "No. The current release works offline and does not include accounts, advertising, analytics, or online purchases.": "아니요. 현재 버전은 오프라인으로 작동하며 계정, 광고, 분석 또는 온라인 구매가 없습니다.",
    "How do pond reminders work?": "연못 알림은 어떻게 작동하나요?",
    "Pond reminders are on by default after iOS notification permission is granted. Local reminders may appear after about 22 hours, 3 days, and 7 days away. Opening Fish Around resets the reminder timer for the next time you leave. You can turn them off in the app or in iOS Settings.": "iOS 알림 권한이 허용되면 연못 알림은 기본으로 켜집니다. 떠난 뒤 약 22시간, 3일, 7일 후에 로컬 알림이 나타날 수 있습니다. Fish Around를 열면 다음에 떠날 때의 알림 타이머가 다시 시작됩니다. 앱 또는 iOS 설정에서 끌 수 있습니다.",
    "How do I report a bug?": "버그를 신고하려면?",
    "Email us with your device model, iOS version, app version, what you expected, and what happened. A screenshot is helpful when available.": "기기 모델, iOS 버전, 앱 버전, 기대한 동작과 실제 발생한 일을 이메일로 보내주세요. 가능하다면 스크린샷도 도움이 됩니다.",
    "Still need help?": "아직 도움이 필요하신가요?",
    "Send a note and include as much detail as you can. We’ll reply from the support address below.": "가능한 한 자세히 적어 보내주세요. 아래 지원 주소에서 답장드리겠습니다.",
    "This ripple went somewhere else.": "이 물결은 다른 곳으로 갔습니다.",
    "The page you were looking for is not in this pond.": "찾는 페이지는 이 연못에 없습니다.",
    "Return to the pond": "연못으로 돌아가기"
  };

  function toTraditionalChinese(text) {
    const replacements = [
      ["首页", "首頁"], ["隐私", "隱私"], ["支持", "支援"], ["一方小池塘", "一方小池塘"],
      ["获得", "獲得"], ["默认", "預設"], ["计时", "計時"],
      ["安静", "安靜"], ["游戏", "遊戲"], ["认识", "認識"], ["布置", "佈置"],
      ["带回", "帶回"], ["里面", "裡面"], ["四种", "四種"], ["性格", "性格"],
      ["温柔", "溫柔"], ["互动", "互動"], ["轻点", "輕點"], ["回应", "回應"],
      ["你的", "你的"], ["解锁", "解鎖"], ["主题", "主題"], ["装饰", "裝飾"],
      ["照片", "照片"], ["回忆", "回憶"], ["发现", "發現"],
      ["保护", "保護"], ["设备", "裝置"], ["离线", "離線"], ["账号", "帳號"],
      ["数据", "資料"], ["广告", "廣告"], ["追踪", "追蹤"], ["第三方", "第三方"],
      ["阅读", "閱讀"], ["政策", "政策"], ["法律信息", "法律資訊"], ["生效日期", "生效日期"],
      ["我们的原则", "我們的原則"], ["数据收集", "資料收集"], ["传输", "傳輸"],
      ["出售", "出售"], ["分享", "分享"], ["个人", "個人"], ["本地", "本機"],
      ["偏好设置", "偏好設定"], ["小鱼", "小魚"], ["泡泡", "泡泡"], ["相册", "相簿"],
      ["语言", "語言"], ["声音", "聲音"], ["忘掉记忆", "忘掉記憶"], ["删除", "刪除"],
      ["系统相册", "系統相簿"], ["权限", "權限"], ["添加", "加入"], ["读取", "讀取"],
      ["浏览", "瀏覽"], ["提醒", "提醒"], ["开启", "開啟"], ["通知", "通知"],
      ["服务器", "伺服器"], ["关闭", "關閉"], ["儿童", "兒童"], ["购买", "購買"],
      ["社交", "社交"], ["变更", "變更"], ["联系方式", "聯絡方式"], ["发送邮件至", "寄送郵件至"],
      ["帮助", "協助"], ["常见问题", "常見問題"], ["恢复", "復原"], ["进度", "進度"],
      ["同步", "同步"], ["为什么", "為什麼"], ["允许", "允許"], ["重置", "重置"],
      ["需要联网吗", "需要連網嗎"], ["不需要", "不需要"], ["报告问题", "回報問題"],
      ["设备型号", "裝置型號"], ["版本", "版本"], ["预期", "預期"], ["实际", "實際"],
      ["还需要", "還需要"], ["支持邮箱", "支援信箱"], ["这道水纹去了别的地方。", "這道水紋去了別的地方。"],
      ["你要找的页面不在这片池塘里。", "你要找的頁面不在這片池塘裡。"], ["回到池塘", "回到池塘"]
    ];
    return replacements.reduce((value, [from, to]) => value.replaceAll(from, to), text);
  }

  const pageTitles = {
    "/": { en: "Fish Around · 摸鱼", zh: "Fish Around · 摸鱼", "zh-Hant": "Fish Around · 摸魚", ja: "Fish Around", ko: "Fish Around" },
    "index.html": { en: "Fish Around · 摸鱼", zh: "Fish Around · 摸鱼", "zh-Hant": "Fish Around · 摸魚", ja: "Fish Around", ko: "Fish Around" },
    "privacy.html": { en: "Privacy Policy · Fish Around", zh: "隐私政策 · 摸鱼", "zh-Hant": "隱私政策 · 摸魚", ja: "プライバシーポリシー · Fish Around", ko: "개인정보 처리방침 · Fish Around" },
    "support.html": { en: "Support · Fish Around", zh: "支持 · 摸鱼", "zh-Hant": "支援 · 摸魚", ja: "サポート · Fish Around", ko: "지원 · Fish Around" },
    "404.html": { en: "Page not found · Fish Around", zh: "页面不存在 · 摸鱼", "zh-Hant": "頁面不存在 · 摸魚", ja: "ページが見つかりません · Fish Around", ko: "페이지를 찾을 수 없음 · Fish Around" }
  };

  function applyLanguage(language) {
    const isChinese = language === "zh";
    const isJapanese = language === "ja";
    const isTraditionalChinese = language === "zh-Hant";
    const isKorean = language === "ko";
    root.lang = isChinese ? "zh-Hans" : "en";
    if (isJapanese) {
      root.lang = "ja";
    } else if (isTraditionalChinese) {
      root.lang = "zh-Hant";
    } else if (isKorean) {
      root.lang = "ko";
    }
    document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
      if (isJapanese) {
        element.textContent = japanese[element.dataset.en] || element.dataset.en;
      } else if (isTraditionalChinese) {
        element.textContent = toTraditionalChinese(element.dataset.zh);
      } else if (isKorean) {
        element.textContent = korean[element.dataset.en] || element.dataset.en;
      } else {
        element.textContent = element.dataset[language];
      }
    });
    if (languageSelect) {
      languageSelect.value = language;
      languageSelect.setAttribute(
        "aria-label",
        {
          en: "Language",
          zh: "语言",
          "zh-Hant": "語言",
          ja: "言語",
          ko: "언어"
        }[language]
      );
    }
    if (toggle) {
      toggle.textContent = languageLabel(language);
      toggle.setAttribute("aria-label", languageAriaLabel(language));
    }
    const pageName = location.pathname.split("/").pop() || "/";
    document.title = pageTitles[pageName]?.[language] || pageTitles["/"][language];
    localStorage.setItem("fish-around-language", language);
  }

  applyLanguage(languages.includes(savedLanguage) ? savedLanguage : preferredLanguage);

  function currentLanguage() {
    return root.lang === "zh-Hant"
      ? "zh-Hant"
      : (root.lang.startsWith("zh") ? "zh" : (root.lang.startsWith("ja") ? "ja" : (root.lang.startsWith("ko") ? "ko" : "en")));
  }

  function languageLabel(language) {
    return {
      en: "English",
      zh: "简体中文",
      "zh-Hant": "繁體中文",
      ja: "日本語",
      ko: "한국어"
    }[language];
  }

  function languageAriaLabel(language) {
    return {
      en: "Current language: English",
      zh: "当前语言：简体中文",
      "zh-Hant": "目前語言：繁體中文",
      ja: "現在の言語: 日本語",
      ko: "현재 언어: 한국어"
    }[language];
  }

  languageSelect?.addEventListener("change", (event) => {
    const nextLanguage = event.target.value;
    if (languages.includes(nextLanguage)) {
      applyLanguage(nextLanguage);
    }
  });

  toggle?.addEventListener("click", () => {
    const language = currentLanguage();
    applyLanguage(languages[(languages.indexOf(language) + 1) % languages.length]);
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
