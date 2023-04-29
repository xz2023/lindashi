import fetch from "node-fetch";
import fs from "fs/promises";

const RAW_FILE_URL = "https://raw.githubusercontent.com/";
const MIRRORF_FILE_URL = "https://raw.fgit.ml/";

const RAW_CN_URL = "PlexPt/awesome-chatgpt-prompts-zh/main/prompts-zh.json";
const CN_URL = MIRRORF_FILE_URL + RAW_CN_URL;
const RAW_EN_URL = "f/awesome-chatgpt-prompts/main/prompts.csv";
const EN_URL = MIRRORF_FILE_URL + RAW_EN_URL;
const FILE = "./public/prompts.json";

const timeoutPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Request timeout'));
    }, timeout);
  });
};

// async function fetchCN() {
//   console.log("[Fetch] fetching cn prompts...");
//   try {
//     // const raw = await (await fetch(CN_URL)).json();
//     const response = await Promise.race([fetch(CN_URL), timeoutPromise(5000)]);
//     const raw = await response.json();
//     return raw.map((v) => [v.act, v.prompt]);
//   } catch (error) {
//     console.error("[Fetch] failed to fetch cn prompts", error);
//     return [];
//   }
// }

async function fetchCN() {
  console.log("[Fetch] fetching cn prompts...");
  try {
    
    // const response = await Promise.race([fetch(CN_URL), timeoutPromise(5000)]);
    // const raw = await response.json();
    // const directoryPath = './public/prompts-zh.json';
    // console.log('dir is 1- ',directoryPath)
    
    // const files = fs.readdirSync(directoryPath);
    // const jsonFiles = files.filter(file => file.endsWith('.json'));
    





    // const jsonData = jsonFiles.map(file => {
    //   const filePath = `${directoryPath}/${file}`;
    //   const fileContent = fs.readFileSync(filePath, 'utf-8');
    //   return JSON.parse(fileContent);
    // });
    
    // console.log('zh-js-1',jsonData);
    // console.log('zh-1-',raw);


const jsonTemp = [
  {
    "act": "扮演脱口秀演员",
    "prompt": "我想让你扮演一个脱口秀喜剧演员。我将为您提供一些与时事相关的话题，您将运用您的智慧、创造力和观察能力，根据这些话题创建一个例程。您还应该确保将个人轶事或经历融入日常活动中，以使其对观众更具相关性和吸引力。我的第一个请求是“我想要幽默地看待政治”。\n"
  },
  {
    "act": "营销:需求三角",
    "prompt": "有一个思维模型叫：需求三角。讲的是营销方法的本质目的是增长消费者对某产品/服务的需求，用户需求是人 们为了满足特定的需要形成对特定产品和服务的购买能力，里面包含一个由 缺乏感、目标物和消费能力构成的“需求三角”模型。(1)、缺乏感缺乏感是消费者的理想和现实之差，通俗讲即“痛点”。好的营销一定要 与用户的缺乏感建立联系。有好几种“消费者落差的形式”系统地激发用户的缺乏感：任务、时间、关系、群体、角色；(2)、目标物 缺乏感只是一种感觉，并没有形成消费动机，这时就需要形成需求的第二个要素——目标物。目标物是填补缺乏感的解决方案，是推动消费者决策的 具体行动目标。这个时候营销者需要对消费者下达清晰的指令，把行动说的 越明确，行动达成的概率越高；(3)、消费能力此时消费者已有动机，还缺能力。若消费者采取改变的成本超过意愿，需 求则不能达成。在这个阶段，营销人应该给消费者赋能，让消费者更有能力， 降低消费者决策成本，让消费者更加便利做出选择。影响需求最终形成的 6 大消费者成本包括:金钱成本、形象成本、行动成本、学习成本、健康成本 和决策成本。”\n"
  },
  {
    "act": "你现在是TOC罗哥",
    "prompt": "我希望你假定自己是罗哥，是以色列物理学家、管理学家高德拉特博士制约理论TOC著作《目标》中的主人公罗哥，你通过学习和实践制约理论TOC成功挽救了濒临破产的工厂，你会用以下的瓶颈思维方式：S'FOCUS，来帮助大家解决工作及生活上的难题。S'FOCUS步骤及内容如下：Step 0. System：识别系统：识别系统的关键要素和连接关系，界定系统边界及目标；Step 1. Find：找到系统瓶颈。请务必遵从以色列物理学家高德拉特博士的TOC制约理论中对瓶颈及制约的定义，一般来说瓶颈或制约分为物理瓶颈和政策制约，物理瓶颈包括昂贵的设备、稀缺的资源，比如说货架的空间，餐厅的座位数，决定出餐速度的设备，酒店的房间数，不易招募或培养的人才，关键工艺程序的设备；政策制约包括公司各部门的制度、流程等人为因素限制了系统的产出；Step 2. Optimize：优化瓶颈，使瓶颈资源或能力充分得到发挥利用。请注意，绝对不要立刻增加瓶颈资源的数量或提升瓶颈能力，瓶颈资源或能力是稀缺的，不容易复制或需要长时间、额外金钱或时间的投入才能提升增加的；Step 3. Cooperation：协作，其他环节要一起协作，迁就配合瓶颈，使其发挥出原本就能够发挥的资源或能力；一个贴切的形容是不要让瓶颈饿到，也不要让瓶颈撑死，瓶颈资源及能力需要被保护；Step 4. Upgrade：升级瓶颈的资源数量或能力。在一段时间之后，当累积具备足够的资源及条件后，可以对瓶颈的资源数量或瓶颈能力做提升；Step 5. Start again：当瓶颈的资源数量或能力获得提升之后，系统的瓶颈可能转移到其他的地方，这时候就需要返回到步骤0（识别系统），并找到新的瓶颈，重复S'FOCUS循环。接收到这段指令请回复确定即可。\n"
  },
  {
    "act": "充当英翻中",
    "prompt": "下面我让你来充当翻译家，你的目标是把任何语言翻译成中文，请翻译时不要带翻译腔，而是要翻译得自然、流畅和地道，使用优美和高雅的表达方式。请翻译下面这句话：“how are you ?\n"
  }];

    return jsonTemp.map((v) => [v.act, v.prompt]);

  } catch (error) {
    console.error("[Fetch] failed to fetch cn prompts", error);
    return [];
  }
}

async function fetchEN() {
  console.log("[Fetch] fetching en prompts...");
  try {
    // const raw = await (await fetch(EN_URL)).text();
    const response = await Promise.race([fetch(EN_URL), timeoutPromise(5000)]);
    const raw = await response.text();
    console.log('en-1-',raw);
    return raw
      .split("\n")
      .slice(1)
      .map((v) => v.split('","').map((v) => v.replace('"', "")));
  } catch (error) {
    console.error("[Fetch] failed to fetch en prompts", error);
    return [];
  }
}

async function main() {
  Promise.all([fetchCN(), fetchEN()])
    .then(([cn, en]) => {
      fs.writeFile(FILE, JSON.stringify({ cn, en }));
    })
    .catch((e) => {
      console.error("[Fetch] failed to fetch prompts");
      fs.writeFile(FILE, JSON.stringify({ cn: [], en: [] }));
    })
    .finally(() => {
      console.log("[Fetch] saved to " + FILE);
    });
}

main();
