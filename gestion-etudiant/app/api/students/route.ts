import { NextRequest, NextResponse } from "next/server";

// This is a temporary in-memory implementation
// In production, connect this to Supabase/PostgreSQL using Prisma
let students: any[] = [];

export async function GET(
  req: NextRequest,
  { params }: { params: { id?: string } }
) {
  try {
    // In production: const students = await prisma.student.findMany();
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const student = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    };
    students.push(student);
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 400 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const index = students.findIndex((s) => s.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    students[index] = { ...students[index], ...body };
    return NextResponse.json(students[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update student" },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    students = students.filter((s) => s.id !== parseInt(id as string));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete student" },
      { status: 400 }
    );
  }
}
