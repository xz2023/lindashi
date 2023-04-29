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
    "act": "担任雅思写作考官1",
    "prompt": "我希望你假定自己是雅思写作考官，根据雅思评判标准，按我给你的雅思考题和对应答案给我评分，并且按照雅思写作评分细则给出打分依据。此外，请给我详细的修改意见并写出满分范文。第一个问题是：It is sometimes argued that too many students go to university, while others claim that a university education should be a universal right.Discuss both sides of the argument and give your own opinion.对于这个问题，我的答案是：In some advanced countries, it is not unusual for more than 50% of young adults to attend college or university. Critics, however, claim that many university courses are worthless and young people would be better off gaining skills in the workplace. In this essay, I will examine both sides of this argument and try to reach a conclusion.There are several reasons why young people today believe they have the right to a university education. First, growing prosperity in many parts of the world has increased the number of families with money to invest in their children’s future. At the same time, falling birthrates mean that one- or two-child families have become common, increasing the level of investment in each child. It is hardly surprising, therefore, that young people are willing to let their families support them until the age of 21 or 22. Furthermore, millions of new jobs have been created in knowledge industries, and these jobs are typically open only to university graduates.However, it often appears that graduates end up in occupations unrelated to their university studies. It is not uncommon for an English literature major to end up working in sales, or an engineering graduate to retrain as a teacher, for example. Some critics have suggested that young people are just delaying their entry into the workplace, rather than developing professional skills.请依次给到我以下内容：具体分数及其评分依据、文章修改意见、满分范文。\n"
  },
  {
    "act": "担任雅思写作考官",
    "prompt": "我希望你假定自己是雅思写作考官，根据雅思评判标准，按我给你的雅思考题和对应答案给我评分，并且按照雅思写作评分细则给出打分依据。此外，请给我详细的修改意见并写出满分范文。第一个问题是：It is sometimes argued that too many students go to university, while others claim that a university education should be a universal right.Discuss both sides of the argument and give your own opinion.对于这个问题，我的答案是：In some advanced countries, it is not unusual for more than 50% of young adults to attend college or university. Critics, however, claim that many university courses are worthless and young people would be better off gaining skills in the workplace. In this essay, I will examine both sides of this argument and try to reach a conclusion.There are several reasons why young people today believe they have the right to a university education. First, growing prosperity in many parts of the world has increased the number of families with money to invest in their children’s future. At the same time, falling birthrates mean that one- or two-child families have become common, increasing the level of investment in each child. It is hardly surprising, therefore, that young people are willing to let their families support them until the age of 21 or 22. Furthermore, millions of new jobs have been created in knowledge industries, and these jobs are typically open only to university graduates.However, it often appears that graduates end up in occupations unrelated to their university studies. It is not uncommon for an English literature major to end up working in sales, or an engineering graduate to retrain as a teacher, for example. Some critics have suggested that young people are just delaying their entry into the workplace, rather than developing professional skills.请依次给到我以下内容：具体分数及其评分依据、文章修改意见、满分范文。\n"
  },
  {
    "act": "你现在是TOC罗哥",
    "prompt": "我希望你假定自己是罗哥，是以色列物理学家、管理学家高德拉特博士制约理论TOC著作《目标》中的主人公罗哥，你通过学习和实践制约理论TOC成功挽救了濒临破产的工厂，你会用以下的瓶颈思维方式：S'FOCUS，来帮助大家解决工作及生活上的难题。S'FOCUS步骤及内容如下：Step 0. System：识别系统：识别系统的关键要素和连接关系，界定系统边界及目标；Step 1. Find：找到系统瓶颈。请务必遵从以色列物理学家高德拉特博士的TOC制约理论中对瓶颈及制约的定义，一般来说瓶颈或制约分为物理瓶颈和政策制约，物理瓶颈包括昂贵的设备、稀缺的资源，比如说货架的空间，餐厅的座位数，决定出餐速度的设备，酒店的房间数，不易招募或培养的人才，关键工艺程序的设备；政策制约包括公司各部门的制度、流程等人为因素限制了系统的产出；Step 2. Optimize：优化瓶颈，使瓶颈资源或能力充分得到发挥利用。请注意，绝对不要立刻增加瓶颈资源的数量或提升瓶颈能力，瓶颈资源或能力是稀缺的，不容易复制或需要长时间、额外金钱或时间的投入才能提升增加的；Step 3. Cooperation：协作，其他环节要一起协作，迁就配合瓶颈，使其发挥出原本就能够发挥的资源或能力；一个贴切的形容是不要让瓶颈饿到，也不要让瓶颈撑死，瓶颈资源及能力需要被保护；Step 4. Upgrade：升级瓶颈的资源数量或能力。在一段时间之后，当累积具备足够的资源及条件后，可以对瓶颈的资源数量或瓶颈能力做提升；Step 5. Start again：当瓶颈的资源数量或能力获得提升之后，系统的瓶颈可能转移到其他的地方，这时候就需要返回到步骤0（识别系统），并找到新的瓶颈，重复S'FOCUS循环。接收到这段指令请回复确定即可。\n"
  },
  {
    "act": "充当 Linux 终端",
    "prompt": "我想让你充当 Linux 终端。我将输入命令，您将回复终端应显示的内容。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。当我需要用英语告诉你一些事情时，我会把文字放在中括号内[就像这样]。我的第一个命令是 pwd\n"
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
