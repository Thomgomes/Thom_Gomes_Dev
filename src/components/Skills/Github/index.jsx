import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl pb-6">
        Contribuições no <strong>Github</strong>
      </h1>
      <GitHubCalendar
        username="Thomgomes"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}
