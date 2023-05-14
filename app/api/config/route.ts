import { NextRequest, NextResponse } from "next/server";

import { getServerSideConfig } from "../../config/server";

const serverConfig = getServerSideConfig();

// Danger! Don not write any secret value here!
// 警告！不要在这里写入任何敏感信息！
const DANGER_CONFIG = {
  needCode: serverConfig.needCode,
  hideUserApiKey: serverConfig.hideUserApiKey,  //可能是作者隐藏用户自行填入API key的一些关键步骤3
};

declare global {
  type DangerConfig = typeof DANGER_CONFIG;
}

export async function POST(req: NextRequest) {
  return NextResponse.json({
    needCode: serverConfig.needCode,
  });
}

export const runtime = "edge";
