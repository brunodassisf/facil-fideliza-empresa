import { NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

async function uploadFileToS3(buffer: Buffer, Key: string, type: string) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
    Key,
    Body: buffer,
    ContentType: type,
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  return Key;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json(
        { msg: "Arquivo não encontrado" },
        { status: 400 }
      );
    }

    if (!(file instanceof File)) {
      return NextResponse.json(
        { msg: "Tipo de arquivo inválido" },
        { status: 400 }
      );
    }

    const fileName = file.name;
    const buffer = Buffer.from(await file.arrayBuffer());
    const savedFileName = await uploadFileToS3(buffer, fileName, file.type);

    return NextResponse.json(
      {
        ok: true,
        msg: "Logo salva com sucesso",
        fileName: savedFileName,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, msg: "Erro ao carregar arquivo" },
      { status: 500 }
    );
  }
}
